import { FC } from 'react';

import { TPageLayout } from '@/lib/interfaces/layouts';
import { cn } from '@/lib/packages/cn';

const PageLayout: FC<TPageLayout> = ({ children, className }) => {
  return <div className={cn('flex flex-grow flex-col', className)}>{children}</div>;
};

export default PageLayout;
