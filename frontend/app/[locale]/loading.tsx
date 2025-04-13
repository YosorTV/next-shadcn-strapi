'use client';

import { Progress } from '@/components/elements/progress';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timer);
            return prev;
          }
          return prev + 10;
        });
      }, 100);

      return () => clearInterval(timer);
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 500);
    };

    // Reset progress when route changes
    setProgress(0);

    // Simulate loading start
    handleStart();

    // Simulate loading complete after a delay
    const completeTimer = setTimeout(handleComplete, 1000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [pathname, searchParams]);

  return (
    <div className='fixed top-0 right-0 left-0 z-50'>
      <Progress value={progress} className='h-1 transition-all duration-300 ease-in-out' />
    </div>
  );
}
