import { Metadata } from 'next';

import PageLayout from '@/components/layouts/page';
import ComingSoon from '@/components/modules/coming-soon';
import { SITE_NAME } from '@/lib/constants/locales';
import { Ti18NParams } from '@/lib/interfaces/layouts';
import getEntityAction from '@/services/actions/common/getEntityAction';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: `${SITE_NAME} | Coming Soon`,
      template: `%s | ${SITE_NAME}`,
    },
  };
}

export default async function CatchAllPage({ params }: Ti18NParams) {
  const { locale, slug } = await params;

  const data = await getEntityAction(slug, locale);

  return (
    <PageLayout locale={locale} className='justify-end'>
      <ComingSoon data={data} />
    </PageLayout>
  );
}
