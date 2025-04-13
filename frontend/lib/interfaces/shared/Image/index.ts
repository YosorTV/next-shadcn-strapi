import { TBaseStructure, TDateTime } from '..';

export type TImageFormatAdapter = Pick<TCoverImageFormat, 'width' | 'height' | 'mime' | 'url'>;

export type TCoverImage = TBaseStructure<TCoverImageAttributes> | undefined;

export type TCoverImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};

export type TFormatsAdapterData = {
  large: TImageFormatAdapter;
  small: TImageFormatAdapter;
  medium: TImageFormatAdapter;
  thumbnail: TImageFormatAdapter;
};

export type TFormats = {
  large: TCoverImageFormat;
  small: TCoverImageFormat;
  medium: TCoverImageFormat;
  thumbnail: TCoverImageFormat;
};

export type TCoverImageAttributes = {
  name: string;
  id: number | string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: TFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
} & Omit<TDateTime, 'publishedAt'>;

export type TImage = {
  data: TCoverImageAttributes;
};
