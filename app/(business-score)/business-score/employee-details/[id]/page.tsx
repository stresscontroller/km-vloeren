'use client';
import React, { useState } from 'react';
import TabIndicator from './_components/TabIndicator';
import Image from 'next/image';
import Link from 'next/link';

const HR = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    'Job & Pay',
    'Personal',
    'Time Off',
    'Documents',
    'Benefits',
    'Notes',
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3 font-semibold">
        <Link href="/human-resources" className="text-blue-500 underline">
          Employees
        </Link>
        <p className="text-grey">/ Jenny Wilson</p>
      </div>
      <div className="w-full flex items-center gap-2">
        <Image
          src="/images/mattdawson-profile-09.png"
          alt="Logo"
          height={100}
          width={100}
          className="w-[100px] h-auto rounded-full shadow-xl"
        />
        <div className="hidden lg:flex flex-col items-start ml-2">
          <span className="text-2xl font-semibold">Matt Dawson</span>
          <span className="text-lg text-gray-500">Owner</span>
        </div>
      </div>
      <TabIndicator
        currentTab={currentTab}
        tabs={tabs}
        onTabChange={setCurrentTab}
      />
      <div className="p-4">{currentTab === 0 && <div>test</div>}</div>
    </div>
  );
};

export default HR;
