'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { TVideo } from '@/lib/interfaces/elements/video';
import { cn } from '@/lib/packages/cn';

const Video: FC<TVideo> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      video.play().catch(() => {
        setErrorState('Failed to play video');
      });
    };

    const handleError = () => {
      setErrorState('Failed to load video');
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
  }, []);

  if (errorState) {
    return (
      <div className={cn('fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black/30', className)}>
        <div className='flex h-full w-full items-center justify-center'>
          <p className='text-white'>Video failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('fixed inset-0 -z-10 h-full w-full overflow-hidden', className)}>
      <video
        ref={videoRef}
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black/30' />
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent' />
        </div>
      )}
    </div>
  );
};

export default Video;
