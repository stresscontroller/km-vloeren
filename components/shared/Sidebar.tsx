'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaPiggyBank, FaMedal } from 'react-icons/fa';
import { IoIosRadio } from 'react-icons/io';
import { BiMoneyWithdraw, BiCog, BiCommentError } from 'react-icons/bi';
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import { TfiMedall } from 'react-icons/tfi';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { TbShieldCheck, TbCalendarTime } from 'react-icons/tb';
import { CiCreditCard2 } from 'react-icons/ci';
// import { useSidebar } from '@/context/SidebarContext';

interface LinkItem {
  href: string;
  icon: JSX.Element;
  label: string;
  order: number;
  multi: boolean; // Indicates if the link has children
  children?: LinkItem[]; // Optional children for sub-links
}

const links: LinkItem[] = [
  {
    href: '/dashboard',
    icon: <FaHome className='text-2xl' />,
    label: 'Overview',
    order: 1,
    multi: false,
  },
  {
    href: '/banking',
    icon: <FaPiggyBank className='text-2xl' />,
    label: 'Banking',
    order: 2,
    multi: true,
    children: [
      {
        href: '/bank-account',
        icon: <MdOutlineManageAccounts className='text-2xl' />,
        label: 'Bank Account',
        order: 1,
        multi: false,
      },
      {
        href: '/cards',
        icon: <CiCreditCard2 className='text-2xl' />,
        label: 'Cards',
        order: 2,
        multi: false,
      },
    ],
  },
  {
    href: '/human-resources',
    icon: <IoIosRadio className='text-2xl' />,
    label: 'HR',
    order: 2,
    multi: false,
  },
  {
    href: '/payroll',
    icon: <BiMoneyWithdraw className='text-2xl' />,
    label: 'Payroll',
    order: 3,
    multi: false,
  },
  {
    href: '/accounting',
    icon: <MdOutlineAccountBalanceWallet className='text-2xl' />,
    label: 'Accounting',
    order: 4,
    multi: false,
  },
  {
    href: '/insurance',
    icon: <TfiMedall className='text-2xl' />,
    label: 'Insurance',
    order: 5,
    multi: false,
  },
  {
    href: '/benefits',
    icon: <FaMedal className='text-2xl' />,
    label: 'Benefits',
    order: 6,
    multi: false,
  },
  {
    href: '/tax',
    icon: <HiOutlineReceiptTax className='text-2xl' />,
    label: 'Tax',
    order: 7,
    multi: false,
  },
  {
    href: '/management',
    icon: <TbShieldCheck className='text-2xl' />,
    label: 'Management',
    order: 8,
    multi: false,
  },
  {
    href: '/time-tracking',
    icon: <TbCalendarTime className='text-2xl' />,
    label: 'Time Tracking',
    order: 9,
    multi: false,
  },
  {
    href: '/settings',
    icon: <BiCog className='text-2xl' />,
    label: 'Settings',
    order: 10,
    multi: false,
  },
  {
    href: '/support',
    icon: <BiCommentError className='text-2xl' />,
    label: 'Support',
    order: 11,
    multi: false,
  },
];

export default function Sidebar() {
  // const { isCollapsed } = useSidebar();
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const getLinkClass = (path: string) => {
    return pathname.includes(path)
      ? 'p-4 text-blue-500 flex gap-2 bg-white border-r-4 border-blue-500'
      : 'p-4 text-gray-600 flex gap-2 hover:bg-white hover:border-r-4 hover:border-blue-500';
  };

  return (
    <div className="bg-gray-50 py-10 flex flex-col transition-width duration-300 ease-in-out w-20 lg:w-72">
      {links
        .sort((a, b) => a.order - b.order)
        .map(({ href, icon, label, multi, children }) => (
          <div key={label}>
            {multi ? (
              <div
                onClick={() => toggleSubmenu(label)}
                className={`${getLinkClass(href)} cursor-pointer`}
              >
                <span className="flex items-center gap-2 w-full">
                  {icon}
                  <span className="text-gray-600 hidden lg:block">{label}</span>
                </span>
                <span>
                  {openSubmenu === label ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </div>
            ) : (
              <Link href={href} className={getLinkClass(href)}>
                <span className="flex items-center gap-2 w-full">
                  {icon}
                  <span className="text-gray-600 hidden lg:block">{label}</span>
                </span>
              </Link>
            )}
            {multi && openSubmenu === label && children && (
              <ul className="space-y-1 pl-4">
                {children
                  .sort((a, b) => a.order - b.order)
                  .map(({ href, icon, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="pl-5 block py-3 text-gray-600 hover:bg-white hover:border-r-4 hover:border-blue-500 hover:text-blue-500 flex gap-2"
                    >
                      {icon}
                      <span className="text-gray-600 hidden lg:block">
                        {label}
                      </span>
                    </Link>
                  ))}
              </ul>
            )}
          </div>
        ))}
      <hr className="mx-4 my-12" />
    </div>
  );
}
