import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/getDictionary";
import { defaultMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    ...defaultMetadata,
    title: dict.hero.title,
    description: dict.hero.subtitle,
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: lang === "fr" ? "fr_CA" : "en_CA",
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero.jpg"
            alt="Service de nettoyage Ajnetpro"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            {dict.hero.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8">{dict.hero.subtitle}</p>
          <Link href={`/${lang}/contact`}>
            <Button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition">
              {dict.hero.cta1}
            </Button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">{dict.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: dict.services.officeCleaningTitle,
              desc: dict.services.officeCleaningDesc,
              img: "/assets/services/bureaux.jpg",
            },
            {
              title: dict.services.buildingMaintenanceTitle,
              desc: dict.services.buildingMaintenanceDesc,
              img: "/assets/services/immeubles.jpg",
            },
            {
              title: dict.services.postConstructionTitle,
              desc: dict.services.postConstructionDesc,
              img: "/assets/services/construction.jpg",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-3xl overflow-hidden border hover:shadow-lg transition"
            >
              <div className="relative h-56 w-full">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            {lang === "fr" ? "Pourquoi nous choisir ?" : "Why choose us?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: lang === "fr" ? "Expérience" : "Experience", desc: lang === "fr" ? "Plus de 10 ans d'expertise dans le nettoyage commercial." : "Over 10 years of commercial cleaning expertise.", icon: "🧹" },
              { title: lang === "fr" ? "Fiabilité" : "Reliability", desc: lang === "fr" ? "Équipes professionnelles, ponctuelles et qualifiées." : "Professional, punctual, and qualified teams.", icon: "🤝" },
              { title: lang === "fr" ? "Écologie" : "Eco-friendly", desc: lang === "fr" ? "Produits écologiques certifiés Écologo." : "Ecologo-certified eco-friendly products.", icon: "🌿" },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          {lang === "fr" ? "Besoin d'un service ?" : "Need a service?"}
        </h2>
        <p className="text-lg mb-8">
          {lang === "fr"
            ? "Contactez-nous dès aujourd'hui pour obtenir votre devis gratuit."
            : "Contact us today to get your free quote."}
        </p>
        <Link href={`/${lang}/contact`}>
          <Button className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            {dict.common.contactUs}
          </Button>
        </Link>
      </section>
    </main>
  );
}
