import { LOCALES } from '@/lib/constants/locales';
import { useLocale as useIntlLocale } from 'next-intl';
import { useRouter } from '../packages/i18n';

const useLocale = () => {
  const locale = useIntlLocale();
  const { push } = useRouter();

  const locales = LOCALES.map((locale) => ({
    label: locale,
    onClick: () => push(locale),
  }));

  return { locales, locale };
};

export default useLocale;
