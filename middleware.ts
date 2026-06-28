import { NextRequest, NextResponse } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignorer les fichiers statiques
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') 
  ) {
    return;
  }

  // Vérifier si le chemin commence déjà par une locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Détecter la langue du navigateur
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const preferredLocale = locales.find((locale) =>
    acceptLanguage.toLowerCase().includes(locale)
  ) ?? defaultLocale;

  return NextResponse.redirect(
    new URL(`/${preferredLocale}${pathname === '/' ? '' : pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
