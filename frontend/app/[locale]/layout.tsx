import { hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/root';
import { TAppLayout } from '@/lib/interfaces/layouts';
import { redirect, routing } from '@/lib/packages/i18n';

import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: TAppLayout) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    redirect({
      href: `/not-found`,
      locale: routing.defaultLocale,
    });
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <RootLayout locale={locale} messages={messages}>
      {children}
    </RootLayout>
  );
}
