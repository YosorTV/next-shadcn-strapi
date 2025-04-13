import { hasLocale } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';

import { DEFAULT_LOCALE, LOCALES, LOCALES_PREFIX } from '@/constants/locales';

export const routing = defineRouting({
  defaultLocale: DEFAULT_LOCALE,
  locales: LOCALES,
  localePrefix: LOCALES_PREFIX,
});

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});

export const { Link, redirect, usePathname, useRouter, getPathname, permanentRedirect } = createNavigation(routing);
