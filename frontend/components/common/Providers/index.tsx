'use client';

import { FC } from 'react';

import { NextIntlClientProvider } from 'next-intl';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import { TProviders } from '@/lib/interfaces/common/providers';

const Providers: FC<TProviders> = ({ children, locale, messages }) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        {children}
        <Toaster />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
