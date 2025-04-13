'use server';

import { cookies } from 'next/headers';

import { pageTypeCookie } from '@/lib/constants/cookies';

export default async function getCookiePageType() {
  const cookieStore = await cookies();

  const pageType = cookieStore.get(pageTypeCookie)?.value.replace(/^\/+/, '');

  return { pageSlug: pageType };
}
