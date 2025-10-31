import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const BillsAndInvoiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Link href="/payroll" className="flex gap-2 items-center">
        <FaArrowLeftLong />
        <span className="underline text-blue-500 ml-2 text-sm">Back to Payroll Overview</span>
      </Link>
      {children}
    </>
  );
};

export default BillsAndInvoiceLayout;