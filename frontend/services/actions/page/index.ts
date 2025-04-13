import PageRepository from '@/lib/interfaces/repo/pages/pageRepository';
import { TID, TLocale } from '@/lib/interfaces/shared';
import STRAPI_QUERY from '@/services/queries';

export default async function getPageBySlugAction(slug: TID, locale: TLocale) {
  const pageRepository = new PageRepository();

  const data = await pageRepository.getOneBySlug(slug, STRAPI_QUERY.page({ locale }));

  return { ...data };
}
