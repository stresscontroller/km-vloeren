import Image from 'next/image';
import React from 'react';

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-center pt-[3rem]">
        <Image src="/logo.png" alt="Logo" height={40.66} width={150} />
      </div>
      {children}
    </>
  );
};

export default OnboardingLayout;
