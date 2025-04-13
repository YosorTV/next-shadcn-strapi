/* eslint-disable @typescript-eslint/no-explicit-any */
import IFetcher, { QueryData, TFetchErrorResponse, TFetchOptions, THeaders } from '@/lib/interfaces/fetcher';
import { TUrl } from '@/lib/interfaces/shared';
import isEmpty from '@/utils/helpers/isEmpty';
import QueryStringBuilder from '@/utils/helpers/queryStringBuilder';

export default class Fetcher implements IFetcher {
  protected baseUrl: TUrl | undefined = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  protected token: string | undefined = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  protected urlQueries: string = '';

  protected fetchHeaders: THeaders;

  protected responseHeaders: Headers | undefined;

  protected errorResponseFormat = {
    error: {
      status: 0,
      message: '',
      rawBody: '',
    },
  };

  constructor() {
    this.fetchHeaders = this.createHeaders();
  }

  createHeaders(): THeaders {
    return {
      authorization: `Bearer ${this.token}`,
      'content-type': 'application/json',
    };
  }

  setBaseUrl(baseUrl: TUrl): void {
    this.baseUrl = baseUrl;
  }

  setHeaders(headers: THeaders): void {
    this.fetchHeaders = headers;
  }

  setUrlQueries(data: QueryData | null = null): IFetcher {
    this.urlQueries = '';
    if (data && !isEmpty(data)) {
      const queryBuilder = new QueryStringBuilder();

      queryBuilder.addObject(data);
      this.urlQueries = queryBuilder.build();
    }

    return this;
  }

  getResponseHeaders(): Headers | undefined {
    return this.responseHeaders;
  }

  async get(url: TUrl): Promise<Response> {
    return this.performFetch(url, this.createFetchOptions('GET'));
  }

  async post(url: TUrl, data: never): Promise<Response> {
    return this.performFetch(url, this.createFetchOptions('POST', JSON.stringify(data)));
  }

  async multipart(url: TUrl, formData: FormData): Promise<Response> {
    return this.performFetch(url, this.createFetchOptions('POST', formData));
  }

  async put(url: TUrl, data: never): Promise<Response> {
    return this.performFetch(url, this.createFetchOptions('PUT', JSON.stringify(data)));
  }

  async patch(url: TUrl, data: never): Promise<Response> {
    return this.performFetch(url, this.createFetchOptions('PATCH', JSON.stringify(data)));
  }

  async delete(url: TUrl): Promise<Response> {
    return this.performFetch(url, this.createFetchOptions('DELETE'));
  }

  createFetchOptions(method: TFetchOptions['method'], body?: TFetchOptions['body']): TFetchOptions {
    return {
      method,
      headers: this.fetchHeaders,
      credentials: 'include',
      body,
      cache: 'no-store',
    };
  }

  async performFetch(url: TUrl, options: TFetchOptions): Promise<any> {
    try {
      const fullUrl = this.buildUrl(url);

      const response = await fetch(fullUrl, options as RequestInit);

      if (!response.ok) {
        return this.createErrorResponse(response);
      }

      this.responseHeaders = response.headers;

      try {
        const text = await response.text();
        const data = JSON.parse(text); // Try to parse it as JSON

        return Promise.resolve(data);
      } catch {
        return this.createErrorResponse(response);
      }
    } catch (error: any) {
      return this.createErrorResponse(error, true);
    }
  }

  async createErrorResponse(response: Response | Error, isException: boolean = false): Promise<TFetchErrorResponse> {
    const responseStatus = isException ? 500 : (response as Response).status;

    const message = isException
      ? (response as Error).message
      : `Network response was not ok (status: ${responseStatus})`;

    const rawBody = isException ? (response as Error).message : await (response as Response).text();

    return {
      ...this.errorResponseFormat,
      error: {
        status: responseStatus,
        message,
        rawBody,
      },
    };
  }

  buildUrl(url: TUrl): TUrl {
    return url.startsWith('/') ? `${this.baseUrl}${url}${this.urlQueries}` : `${url}${this.urlQueries}`;
  }
}
