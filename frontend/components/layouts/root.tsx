import { FC } from 'react';

import Providers from '@/components/common/Providers';
import Footer from '@/components/units/footer';
import Header from '@/components/units/header';
import { TRootLayout } from '@/lib/interfaces/layouts';
import { cn } from '@/lib/packages/cn';
import { montserrat } from '@/assets/fonts';

const RootLayout: FC<TRootLayout> = ({ children, locale, messages }) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className={cn(montserrat.className)}>
        <div className='relative container mx-auto max-w-xs flex-grow sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl'>
          <Providers locale={locale} messages={messages}>
            <Header locale={locale} />
            <main className='flex min-h-dvh flex-col'>{children}</main>
            <Footer locale={locale} />
          </Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
