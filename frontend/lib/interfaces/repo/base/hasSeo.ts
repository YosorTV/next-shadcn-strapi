import { TImage } from '../../shared/Image';

export default interface HasSeo {
  seo?: {
    id: number;
    metaTitle: string | null;
    metaDescription: string | null;
    keywords: null;
    metaRobots: null;
    structuredData?: Record<string, never>;
    metaViewport: null;
    canonicalURL: null;
    metaImage: TImage;
    metaSocial: unknown;
  };
}
