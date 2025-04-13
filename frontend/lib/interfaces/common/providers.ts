import { AbstractIntlMessages } from 'next-intl';

import { TRootLayout } from '@/lib/interfaces/layouts';

export type TProviders = TRootLayout & {
  messages: AbstractIntlMessages;
};
