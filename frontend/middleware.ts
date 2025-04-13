import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { publicFilePatterns } from '@/lib/constants/regExp';
import { routing } from '@/lib/packages/i18n';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const systemRoutes = ['/api', '/_next/'];

  const isPublicFile = publicFilePatterns.some((pattern) => pattern.test(pathname));
  const isSystemRoute = systemRoutes.some((route) => pathname.includes(route));

  if (isPublicFile || isSystemRoute) {
    return NextResponse.next();
  }

  if (pathname === '/en') {
    return NextResponse.redirect(new URL('/en/coming-soon', request.url));
  }

  if (pathname === '/uk') {
    return NextResponse.redirect(new URL('/uk/coming-soon', request.url));
  }

  return createIntlMiddleware(routing)(request);
}

export const config = {
  matcher: [
    '/(en|uk)/:path*',
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'next-action' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
