'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

import Logo from '../shared/Logo';
import { FaRegBell } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';
import { FaRegPlusSquare } from 'react-icons/fa';
// import { PiDotsThreeOutlineVerticalThin } from 'react-icons/pi';
// import { CiCircleList } from 'react-icons/ci';
// import { useSidebar } from '@/context/SidebarContext';

export default function Navbar({ isBasicNavbar }: { isBasicNavbar: boolean }) {
  const [open, setOpen] = useState<boolean>(false);
  const [flyer, setFlyer] = useState<boolean>(false);
  // const { isCollapsed, toggleSidebar } = useSidebar();
  const links = [
    { href: '/notifications', icon: <FaRegBell /> },
    { href: '/messages', icon: <FaRegEnvelope /> },
    { href: '/calculator', icon: <FaCalculator /> },
    { href: '/add', icon: <FaRegPlusSquare />, className: 'text-blue-700' },
  ];

  return (
    <>
      <header className="fixed w-full bg-white z-10">
        <div className="h-24 px-4 lg:px-10 flex justify-between lg:justify-around items-center shadow-md">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="w-60 text-xl flex items-center">
              <Logo />
            </div>
            {!isBasicNavbar && (
              <div className="gap-3 flex">
                {/* <button
                  className="text-2xl text-gray-700"
                  onClick={toggleSidebar}
                >
                  {isCollapsed ? (
                    <CiCircleList />
                  ) : (
                    <PiDotsThreeOutlineVerticalThin />
                  )}
                </button> */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="border-none outline-none block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                      placeholder="Search"
                      required
                    />
                  </div>
                  {links.map(({ href, icon, className }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`text-2xl text-gray-700 ${className}`}
                    >
                      {icon}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-row hidden md:flex md:space-x-10 lg:space-x-20">
            <div className="relative">
              <button
                type="button"
                className=" outline-none group bg-white rounded-md inline-flex items-center text-base font-medium"
                onClick={() => setFlyer(!flyer)}
              >
                <Image
                  src="/images/mattdawson-profile-09.png"
                  alt="Logo"
                  height={100}
                  width={100}
                  className="w-[45px] h-auto rounded-full"
                />
                <div className="hidden lg:flex flex-col items-start ml-2">
                  <span>Matt Dawson</span>
                  <span className="text-sm text-gray-500">Owner</span>
                </div>
                <svg
                  className={
                    flyer === true
                      ? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
                      : 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? 'block translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-60 max-w-md right-0'
                    : 'hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-60 max-w-md right-0'
                }
              >
                <div className="rounded-l-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white py-4">
                  <div
                    className="relative grid "
                    onClick={() => setFlyer(false)}
                  >
                    <Link
                      href="#"
                      className="p-3 flex items-start rounded-lg text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      <span className="ml-4 text-base font-medium">
                        Employee Profile
                      </span>
                    </Link>
                    <Link
                      href="/profile"
                      className="p-3 flex items-start rounded-lg text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      <span className="ml-4 text-base font-medium">
                        My Profile
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="p-3 flex items-start rounded-lg text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      <span className="ml-4 text-base font-medium">
                        Add Company
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="p-3 flex items-start rounded-lg text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      <span className="ml-4 text-base font-medium">
                        Settings
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? 'block scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden z-10'
              : 'hidden scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10'
          }
        >
          <div className="rounded-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 shadow-2xl">
            <div className="px-4">
              <div className="flex items-center justify-between h-24">
                <div className="w-60 text-xl flex items-center gap-5">
                  <Logo />
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex flex-col gap-y-8 justify-center">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="border-none outline-none block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                      placeholder="Search"
                      required
                    />
                  </div>
                  <div className="flex flex-wrap justify-center gap-8 mb-6">
                    {links.map(({ href, icon, className }) => (
                      <Link
                        key={href}
                        href={href}
                        className={`text-2xl text-gray-700 ${className}`}
                      >
                        {icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 px-8 space-y-6">
              <button
                type="button"
                className="outline-nonegroup bg-white rounded-md inline-flex items-center text-base font-medium"
              >
                <Image
                  src="/images/user.png"
                  alt="Logo"
                  height={100}
                  width={100}
                  className="w-[45px] h-auto"
                />
                <div className="flex flex-col items-start ml-2">
                  <span>Matt Dawson</span>
                  <span className="text-sm text-gray-500">Owner</span>
                </div>
              </button>
              <div className="flex flex-col">
                <div className="px-10 flex flex-col">
                  {[
                    'Employee Profile',
                    'My Profile',
                    'Add Company',
                    'Settings',
                  ].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      className="p-3 flex items-start rounded-lg text-gray-700 hover:bg-gray-50 hover:text-black"
                    >
                      <span className="ml-4 text-base font-medium">{text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="p-12"></div>
    </>
  );
}
