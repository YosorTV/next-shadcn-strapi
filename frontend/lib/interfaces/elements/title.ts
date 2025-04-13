import { HTMLAttributes } from 'react';

import { VariantProps } from 'class-variance-authority';

import titleVariants from '@/lib/packages/tailwind.variants';

export type ITitleSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IHeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export type ITitle = ITitleProps & VariantProps<typeof titleVariants>;

export type THeadingTag = `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;

export interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level: IHeadingLevel;
}
