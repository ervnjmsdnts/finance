'use client';

import { HTMLProps, useEffect, useState } from 'react';

interface Props extends HTMLProps<HTMLParagraphElement> {
  endNumber: number;
  duration: number;
}

export default function GradualNumber({
  endNumber,
  duration,
  ...props
}: Props) {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | undefined;
    let animationFrameId: number;

    const customEase = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      setCurrentNumber(
        Math.min(endNumber, customEase(progress / duration) * endNumber),
      );
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endNumber, duration]);

  const formatNumberWithCommas = (number: number): string => {
    const formattedNumber = number.toFixed(2); // Fixed precision with 2 decimal places
    const parts = formattedNumber.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas for thousands separators
    return parts.join('.');
  };

  return (
    <p {...props}>
      {formatNumberWithCommas(Number(currentNumber.toFixed(2)))} PHP
    </p>
  );
}
