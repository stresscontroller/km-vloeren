import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Link href="/dashboard" className="flex gap-2 items-center">
        <FaArrowLeftLong />
        <span className="underline text-blue-500">Back to Dashboard</span>
      </Link>
      {children}
    </>
  );
};

export default ProfileLayout;
