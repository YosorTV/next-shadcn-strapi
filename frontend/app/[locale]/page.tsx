import { Metadata } from 'next';

import PageLayout from '@/components/layouts/page';
import ComingSoon from '@/components/modules/coming-soon';
import { SITE_NAME } from '@/lib/constants/locales';
import { Ti18NParams } from '@/lib/interfaces/layouts';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: `${SITE_NAME} | Coming Soon`,
      template: `%s | ${SITE_NAME}`,
    },
  };
}

export default async function Home({ params }: Ti18NParams) {
  const { locale } = await params;

  return (
    <PageLayout locale={locale} className='justify-end'>
      <ComingSoon />
    </PageLayout>
  );
}
