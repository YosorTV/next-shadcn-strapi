import qs from 'qs';

import isEmpty from '@/utils/helpers/isEmpty';

export default class QueryStringBuilder {
  private readonly encode = encodeURIComponent;

  private readonly decode = decodeURIComponent;

  private query: string[] = [];

  private safeDecode(value: string): string {
    try {
      return this.decode(value);
    } catch (e) {
      console.error('Decoding error: ', e);
      return value;
    }
  }

  add(name: string, value?: string): QueryStringBuilder {
    if (!name) {
      throw Error('name is required to add a query parameter');
    }

    this.query.push(`${this.encode(this.safeDecode(name))}=${(value && this.encode(this.safeDecode(value))) || ''}`);

    return this;
  }

  addObject(object: object): QueryStringBuilder {
    if (isEmpty(object)) {
      throw Error('object is required to add a query parameter');
    }

    const encodedParams = qs.stringify(object).split('&');

    this.query.push(...encodedParams);
    return this;
  }

  build(): string {
    return this.query.length ? `?${this.query.join('&')}` : '';
  }
}
