'use client';

import { FC, PropsWithChildren, useRef } from 'react';

import { motion, useInView } from 'motion/react';

import revealAnimation from '@/assets/animations/reveal';
import { IAnimatedTag, TMotionTag } from '@/lib/interfaces/elements/animatedTag';

const AnimatedTag: FC<PropsWithChildren<IAnimatedTag>> = ({ children, tag = 'div', ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const MotionTag = motion.create<TMotionTag>(tag);

  return (
    <MotionTag ref={ref} {...revealAnimation(isInView)} {...props}>
      {children}
    </MotionTag>
  );
};

export default AnimatedTag;
