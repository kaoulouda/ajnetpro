'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// TODO: Renommer le fichier en "hero.jpeg" dans /assets/images/ puis utiliser:
// import heroImage from '@/assets/images/hero.jpeg';
import heroImage from '@/assets/images/hero.jpeg';
import Image from 'next/image';
interface HeroProps {
  lang: string;
  dict: any;
}

export function Hero({ lang, dict }: HeroProps) {
  return (
    <section className="relative hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary.400)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh] py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              {lang === 'fr' ? 'Entreprise canadienne de confiance' : 'Trusted Canadian Company'}
            </motion.div>

            <h1 className="heading-xl text-gradient">
              {dict.hero.title}
            </h1>

            <p className="text-large max-w-lg">
              {dict.hero.subtitle}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dict.hero.features.slice(0, 4).map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-success-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="btn-primary group shadow-glow">
                <Link href={`/${lang}/contact`}>
                  {dict.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-secondary">
                <Link href={`/${lang}/services`}>
                  {dict.hero.cta2}
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="stats-counter">500+</div>
                <div className="text-sm text-gray-600">
                  {lang === 'fr' ? 'Clients satisfaits' : 'Satisfied Clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="stats-counter">10+</div>
                <div className="text-sm text-gray-600">
                  {lang === 'fr' ? 'Années d\'expérience' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="stats-counter">24/7</div>
                <div className="text-sm text-gray-600">
                  {lang === 'fr' ? 'Service disponible' : 'Service Available'}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <Image
                src={heroImage}
                alt="Professional cleaning team providing commercial cleaning services in Montreal"
                className="w-full h-[600px] lg:h-[700px] object-cover rounded-3xl shadow-large"
                width={1200}
                height={700}
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-medium"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-800">
                    {lang === 'fr' ? 'Service Premium' : 'Premium Service'}
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-primary-600 text-white rounded-2xl p-4 shadow-medium"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-semibold">
                    {lang === 'fr' ? '100% Satisfait' : '100% Satisfied'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full">
        <div className="w-full h-full bg-gradient-to-l from-primary-100/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2">
        <div className="w-full h-full bg-gradient-to-t from-accent-100/20 to-transparent rounded-tr-full" />
      </div>
    </section>
  );
}