'use client';

import { cn } from '@/lib/utils';
import AnimatedNumber from 'react-animated-numbers';

interface Props {
  endNumber: number;
  className?: string;
}

export default function GradualNumber({ endNumber, className }: Props) {
  return (
    <p className={cn('text-3xl flex gap-2 font-medium', className)}>
      <AnimatedNumber
        animateToNumber={endNumber}
        includeComma
        transitions={(index) => ({
          duration: index + 0.1,
        })}
      />
      <span>PHP</span>
    </p>
  );
}
