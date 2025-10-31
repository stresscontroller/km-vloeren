import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center w-max items-center">
      <Image
        src="/logo-b.png"
        alt="Logo"
        height={21.4}
        width={150}
        className="w-[120px] md:w-[150px] lg:w-[180px] h-auto"
      />
    </Link>
  );
};

export default Logo;
