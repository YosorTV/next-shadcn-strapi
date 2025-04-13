import { TFetchErrorResponse } from '@/interfaces/fetcher';
import { TID } from '@/interfaces/shared';
import Page from '@/lib/interfaces/repo/entities/pages';

export type EntityGetter = (id: TID) => Page | TFetchErrorResponse;
