'use client';
import React from 'react';
import { Transition, motion, useAnimation, useInView } from 'framer-motion';

const NUMBERS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
  6, 7, 8, 9,
];

const AnimatedNumber = ({
  className,
  animateToNumber = 0,
  transitions,
  includeComma,
  locale,
}: {
  className?: string;
  animateToNumber: number;
  transitions?: Transition;
  includeComma?: Boolean;
  locale?: Intl.LocalesArgument;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();
  const keyCount = React.useRef(0);
  const animateTonumberString = includeComma
    ? Math.abs(animateToNumber).toLocaleString(locale || 'en-US')
    : String(Math.abs(animateToNumber));
  const animateToNumbersArr: (string | number)[] = Array.from(
    animateTonumberString,
    Number,
  ).map((x, idx) => (isNaN(x) ? animateTonumberString[idx] : x));

  const [numberHeight, setNumberHeight] = React.useState(0);
  const [numberWidth, setNumberWidth] = React.useState(0);

  const numberDivRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = numberDivRef.current?.getClientRects()?.[0];
    if (rect) {
      setNumberHeight(rect.height);
      setNumberWidth(rect.width);
    }
  }, [animateToNumber]);

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, animateToNumber, controls]);

  return (
    <div ref={ref}>
      {numberHeight !== 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          }}
          className={className}>
          {animateToNumbersArr.map((n, index) => {
            if (typeof n === 'string') {
              return (
                <div key={index} style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {n}
                </div>
              );
            }

            return (
              <div
                key={index}
                style={{ height: numberHeight, width: numberWidth }}>
                {NUMBERS.map((number) => (
                  <motion.div
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                    key={`${keyCount.current++}`}
                    initial='hidden'
                    variants={{
                      hidden: { y: 0 },
                      visible: {
                        y:
                          // @ts-ignore
                          -1 * (numberHeight * animateToNumbersArr[index]) -
                          numberHeight * 20,
                      },
                    }}
                    animate={controls}
                    // @ts-ignore
                    transition={transitions(index)}>
                    {number}
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      <div ref={numberDivRef} style={{ position: 'absolute', top: -9999 }}>
        {0}
      </div>
    </div>
  );
};

export default React.memo(AnimatedNumber);
