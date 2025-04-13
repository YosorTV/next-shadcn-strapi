'use client';

import { useLocale as useIntlLocale } from 'next-intl';

import { LOCALES } from '@/lib/constants/locales';
import { redirect, usePathname } from '@/lib/packages/i18n';

const useLocale = () => {
  const locale = useIntlLocale();
  const pathname = usePathname();

  const locales = LOCALES.map((lang) => ({
    label: lang,
    onClick: () => {
      redirect({
        locale: lang,
        href: pathname,
      });
    },
  }));

  return { locales, locale };
};

export default useLocale;
