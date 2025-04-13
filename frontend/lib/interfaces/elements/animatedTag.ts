import { motion } from 'motion/react';
import { ComponentType, HTMLAttributes, RefAttributes } from 'react';

type MotionTagType = keyof typeof motion;

export interface IAnimatedTag {
  tag: MotionTagType;
  className?: string;
}

export type TMotionTag = ComponentType<HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>>;
