import Fetcher from '@/fetchers/fetcher';
import IFetcher, { QueryData, TFetchErrorResponse, TFetchResponse } from '@/interfaces/fetcher';
import Repository from '@/lib/interfaces/shared/Repository';

export default abstract class BaseRepository<T> implements Repository<T> {
  protected static fetcher: IFetcher;

  protected abstract endpoint: string;

  protected fetcher: IFetcher;

  constructor() {
    if (!BaseRepository.fetcher) {
      BaseRepository.fetcher = new Fetcher();
    }

    this.fetcher = BaseRepository.fetcher;
  }

  async getAll(queries: QueryData | null = null): Promise<TFetchResponse<T[]>> {
    const response = await this.fetcher.setUrlQueries(queries).get(`${this.endpoint}`);

    const { data, meta, error } = response as unknown as TFetchResponse<T[]>;

    return { data, meta, error };
  }

  async getOne(id: number | string = '', queries: QueryData | null = null): Promise<T | TFetchErrorResponse> {
    const endpoint = id ? `${this.endpoint}/${id}` : `${this.endpoint}`;

    const response = await this.fetcher.setUrlQueries(queries).get(endpoint);

    const { data, error } = response as unknown as { data: T; error: TFetchErrorResponse['error'] };

    if (error) return { error } as TFetchErrorResponse;

    return data as T;
  }

  async formAction(formData: FormData, queries: QueryData | null = null) {
    const response = await this.fetcher.setUrlQueries(queries).multipart(`${this.endpoint}`, formData);

    const { data, error } = response as unknown as { data: unknown; error: TFetchErrorResponse['error'] };

    return { data, error };
  }
}
