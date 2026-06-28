import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { defaultMetadata } from '@/lib/metadata';

// Décommenter quand les composants seront prêts :
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
