import isEmpty from '@/helpers/isEmpty';
import { QueryData, TFetchErrorResponse } from '@/interfaces/fetcher';
import { TID } from '@/interfaces/shared';
import BaseRepository from '@/lib/interfaces/repo/base/repository';

export default abstract class StrapiRepository<T> extends BaseRepository<T> {
  async getOneBySlug(slug: TID, queries: QueryData | null = null): Promise<T | TFetchErrorResponse> {
    if (!slug || slug === '')
      return {
        error: {
          status: 500,
          message: `Slug is required and can't be empty`,
        },
      };

    const { data, error } = await this.getAll({ ...queries });

    if (error) return { error };

    if (Array.isArray(data) && !isEmpty(data[0])) {
      return data[0] as T;
    }

    return {
      error: {
        status: 404,
        message: 'Item not found',
      },
    };
  }
}
