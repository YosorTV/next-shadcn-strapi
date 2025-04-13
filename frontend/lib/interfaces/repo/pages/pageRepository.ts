import Page from '@/lib/interfaces/repo/entities/pages';
import StrapiRepository from '@/lib/packages/strapi';

export default class PageRepository extends StrapiRepository<Page> {
  protected endpoint: string = '/pages';
}
