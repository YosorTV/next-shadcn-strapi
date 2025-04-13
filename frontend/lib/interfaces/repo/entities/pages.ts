import { IBlocks } from '@/lib/interfaces/common/blockManager';
import HasId from '@/lib/interfaces/repo/base/hasId';
import HasSeo from '@/lib/interfaces/repo/base/hasSeo';
import HasSlug from '@/lib/interfaces/repo/base/hasSlug';

import { TImage } from '../../shared/Image';

export default interface Page extends HasId, HasSlug, HasSeo {
  title: string;
  description: string;
  cover: TImage;
  blocks?: IBlocks;
}
