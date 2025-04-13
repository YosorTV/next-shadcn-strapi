import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { AnimatedTag } from '@/components/elements/animated-tag';
import { Title } from '@/components/elements/title';
import DEFAULT_EMAIL from '@/lib/constants/system';

export default async function ComingSoon() {
  const t = await getTranslations('comingSoon');

  return (
    <AnimatedTag tag='section'>
      <div className='flex w-full flex-col items-center justify-between gap-5 pb-12 sm:flex-row sm:gap-0 md:pb-xl'>
        <Title level='1' variant='heading' className='drop-shadow-lg'>
          {t('title')}
        </Title>
        <p className='text-primary-content snaga-arabic font-snaga-arabic w-full text-xs leading-[24px] font-medium text-wrap sm:w-auto'>
          {t('description-part-1')}
          <br />
          <Link href={`mailto:${DEFAULT_EMAIL}`} className='cursor-pointer font-bold'>
            {DEFAULT_EMAIL}
          </Link>
          &nbsp;{t('description-part-2')}
        </p>
      </div>
    </AnimatedTag>
  );
}
