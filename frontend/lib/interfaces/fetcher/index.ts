import { TUrl } from '../shared';

export type THeaders = { [key: string]: string | number | null | boolean | undefined };

export type TFetchOptionsDraft = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH'; // Supported HTTP methods
  headers?: HeadersInit; // Headers object or an initializer object
  body?: BodyInit | null; // Request body (string, Blob, FormData, URLSearchParams, etc.)
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached'; // Cache behavior
  mode?: 'cors' | 'no-cors' | 'same-origin'; // Request mode (CORS handling)
  credentials?: 'omit' | 'same-origin' | 'include'; // Include cookies
  redirect?: 'follow' | 'error' | 'manual'; // Redirect handling
  referrer?: ReferrerPolicy; // Referrer policy
  referrerPolicy?: ReferrerPolicy; // Another way to specify referrer policy (alias)
  signal?: AbortSignal | null; // Abort signal for cancellation
};

export type TFetchPaginationResponse = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type TFetchErrorResponse = {
  error: {
    status: number;
    message: string;
    rawBody?: string;
  };
};

export type TFetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH';
  headers: THeaders;
  cookies?: Record<string, string>;
  body?: string | FormData | BodyInit | null;
  credentials?: 'omit' | 'same-origin' | 'include';
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached' | 'no-store';
};

export type TFetchResponse<T> = {
  data: T;
  meta: TFetchPaginationResponse;
  error: TFetchErrorResponse['error'];
};

type FilterOperator = {
  [key: string]: string | string[] | number | boolean;
};

type Filters = {
  [key: string]: FilterOperator;
};

export interface QueryData {
  [key: string]: string | string[] | { [key: string]: string }[] | Filters | Record<string, unknown>;
}

export default interface IFetcher {
  buildUrl(url: TUrl): TUrl;
  createErrorResponse(response: Response | unknown, isException: boolean): Promise<TFetchErrorResponse>;
  createFetchOptions(method: string, body?: string | FormData | undefined): TFetchOptions;
  createHeaders(): THeaders;
  delete(url: TUrl): Promise<Response>;
  get(url: TUrl): Promise<Response>;
  getResponseHeaders(): Headers | undefined;
  multipart(url: TUrl, data: unknown): Promise<Response>;
  patch(url: TUrl, data: unknown): Promise<Response>;
  performFetch(url: TUrl, options: TFetchOptions): Promise<Response>;
  post(url: TUrl, data: unknown): Promise<Response>;
  put(url: TUrl, data: unknown): Promise<Response>;
  setBaseUrl(baseUrl: TUrl): void;
  setHeaders(headers: THeaders): void;
  setUrlQueries(data: QueryData | null): IFetcher;
}
