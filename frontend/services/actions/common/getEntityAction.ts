'use server';

import { notFound } from 'next/navigation';

import isEmpty from '@/helpers/isEmpty';
import { TFetchErrorResponse } from '@/interfaces/fetcher';
import Page from '@/lib/interfaces/repo/entities/pages';
import { TLocale } from '@/lib/interfaces/shared';
import getEntityDetails from '@/utils/helpers/getEntityDetail';

import getPageBySlugAction from '../page';

export default async function getEntityAction(slug: string[], locale: TLocale): Promise<Page | TFetchErrorResponse> {
  const { entityType, entityId } = getEntityDetails(slug);

  const isRootType = entityType && !entityId;

  const entityPath = isRootType ? entityType : entityId;

  const entity = await getPageBySlugAction(entityPath, locale);

  if (isEmpty(entity)) {
    notFound();
  }

  return entity;
}
