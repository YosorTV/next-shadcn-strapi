import { QueryData, TFetchErrorResponse, TFetchResponse } from '@/interfaces/fetcher';

export default interface Repository<T> {
  getOne(id: number | string, queries: { [key: string]: string } | null): Promise<T | TFetchErrorResponse>;
  getAll(queries: QueryData | null): Promise<TFetchResponse<T[]>>;
}
