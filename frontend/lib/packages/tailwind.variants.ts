import { cva } from 'class-variance-authority';

import { cn } from '@/lib/packages/cn';

const titleVariants = cva('font-medium break-words', {
  variants: {
    variant: {
      heading: 'font-bold text-primary-content text-xl leading-lg sm:text-2xl sm:leading-2xl text-wrap',
      subheading: 'text-lg sm:text-xl',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
  },
  compoundVariants: [{ variant: ['heading', 'subheading'], className: cn('uppercase') }],
});

export default titleVariants;
