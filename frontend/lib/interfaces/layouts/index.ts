import { PropsWithChildren } from 'react';

import { AbstractIntlMessages } from 'next-intl';

import { TLocale } from '@/lib/interfaces/shared';

export type Ti18NParams = {
  params: Promise<{ locale: TLocale; slug: string[] }>;
};

export type TAppLayout = PropsWithChildren<Ti18NParams>;

export type TRootLayout = PropsWithChildren & {
  locale: TLocale;
  messages: AbstractIntlMessages;
};

export type TPageLayout = PropsWithChildren & {
  locale: TLocale;
  className?: string;
};
