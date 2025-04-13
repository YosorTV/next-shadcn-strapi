import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { SITE_NAME } from '@/lib/constants/locales';
import { Link } from '@/lib/packages/i18n';
import { AnimatedTag } from '@/components/elements/animated-tag';
import { Title } from '@/components/elements/title';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: `${SITE_NAME} | NOT FOUND`,
      template: `%s | ${SITE_NAME}`,
    },
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations('notFound');

  return (
    <AnimatedTag tag='section' className='flex h-screen flex-col items-center justify-center gap-5 text-center'>
      <span className='text-6xl font-bold'>404</span>
      <Title level='3'>{t('message')}</Title>
      <Link href='/' className='btn btn-primary'>
        {t('return')}
      </Link>
    </AnimatedTag>
  );
}
