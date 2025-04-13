import Link from 'next/link';

import AnimatedTag from '@/components/elements/animated-tag';
import Title from '@/components/elements/title';
import DEFAULT_EMAIL from '@/lib/constants/system';

import Video from '../elements/video';

export default async function ComingSoon({ data }: { data: any }) {
  const { title, description, cover } = data;

  const { coverXl } = cover;

  return (
    <AnimatedTag tag='section'>
      <Video src={coverXl.url} className='h-full w-full object-cover' />
      <div className='flex w-full flex-col items-center justify-between gap-5 pb-12 sm:flex-row sm:gap-0 md:pb-xl'>
        <Title level='1' variant='heading' className='drop-shadow-lg'>
          {title}
        </Title>
        <p className='text-primary-content w-full text-xs leading-[24px] font-medium text-wrap sm:w-auto'>
          {description}
          <br />
          <Link href={`mailto:${DEFAULT_EMAIL}`} className='cursor-pointer font-bold'>
            {DEFAULT_EMAIL}
          </Link>
        </p>
      </div>
    </AnimatedTag>
  );
}
