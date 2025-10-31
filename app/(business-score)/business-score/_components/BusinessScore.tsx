'use client';
import React, { useState } from 'react';
import TabIndicator from './TabIndicator';

import Experian from './Experian';
import CreditSafe from './CreditSafe';

const BusinessScore = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      label: 'Experian',
      value: 480,
    },
    {
      label: 'Credit Safe',
      value: 500,
    },
    {
      label: 'TransUnion',
      value: 480,
    },
    {
      label: 'Dun & Bradstreet',
      value: 480,
    },
    {
      label: 'Equifax',
      value: 480,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-2xl mb-2 font-semibold">
          Hey, here's your Business Scorecard
        </h2>
        <p className="text-sm text-gray-500">
          Nullam lorem in orci pretium id vulputate enim viverra semper
          porttitor auctor
        </p>
      </div>
      <div className="bg-white p-6 rounded-2xl">
        <TabIndicator
          currentTab={currentTab}
          tabs={tabs}
          onTabChange={setCurrentTab}
        />
        <div className="mt-5">
          {currentTab === 0 && <Experian />}
          {currentTab === 1 && (
            <div className="flex flex-col gap-5">
              <CreditSafe />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessScore;
