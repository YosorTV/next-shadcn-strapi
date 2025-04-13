export type TLocale = 'en' | 'ar';
export type TUrl = string;
export type TID = number | string;

export type TDateTime = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type TBaseStructureData<T> = {
  id: number | string;
  attributes: T;
};

export type TBaseStructure<T> = {
  data?: TBaseStructureData<T> | null;
};
