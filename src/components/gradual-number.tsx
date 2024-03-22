'use client';

import { cn } from '@/lib/utils';
import AnimatedNumber from './animated-number';

interface Props {
  endNumber: number;
  className?: string;
}

export default function GradualNumber({ endNumber, className }: Props) {
  return (
    <div className={cn('text-3xl flex gap-2 font-medium', className)}>
      <AnimatedNumber
        animateToNumber={endNumber}
        includeComma
        transitions={(index: number) => ({
          duration: index + 0.1,
        })}
      />
      <span>PHP</span>
    </div>
  );
}
