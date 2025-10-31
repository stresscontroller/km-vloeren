'use client';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const Progressbar = ({ current, next }: { current: number; next: number }) => {
  const [progress, setProgress] = useState(current);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(next), 500);
    return () => clearTimeout(timer);
  }, [next]);
  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <Progress value={progress} className="max-w-[20rem]" />
      <p className="text-2xl">{`${progress}% completed`}</p>
    </div>
  );
};

export default Progressbar;
