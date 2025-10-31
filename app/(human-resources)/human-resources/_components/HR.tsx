'use client';
import React, { useState } from 'react';
import TabIndicator from './TabIndicator';
import Overview from './Overview';

import { TableActionBar } from './TableActionBar';
import ApplicantTrackingTable from './ApplicantTrackingTable';
import BackgroundCheckTable from './BackgroundCheckTable';
import Learning from './Learning';
import LicenseVerificationTable from './LicenseVerificationTable';
import EmployeeCard from './EmployeeCard';

const HR = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    'Overview',
    'Applicant Tracking',
    'Background Check',
    'Learning',
    'License Verification',
    'Employees',
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Human Resources</h2>
        <p className="text-grey">
          Urna vitae lorem ac nulla quis risus vitae ut. Pellentesque gravida
          ante dignissim diam vitae placerat vellum
        </p>
      </div>
      <TabIndicator
        currentTab={currentTab}
        tabs={tabs}
        onTabChange={setCurrentTab}
      />
      <div className="p-4">
        {currentTab === 0 && <Overview />}
        {currentTab === 1 && (
          <div className="flex flex-col gap-5">
            <TableActionBar />
            <ApplicantTrackingTable />
          </div>
        )}
        {currentTab === 2 && (
          <div className="flex flex-col gap-5">
            <TableActionBar />
            <BackgroundCheckTable />
          </div>
        )}
        {currentTab === 3 && <Learning />}
        {currentTab === 4 && (
          <div className="flex flex-col gap-5">
            <TableActionBar />
            <LicenseVerificationTable />
          </div>
        )}
        {currentTab === 5 && (
          <div className="flex flex-col gap-5">
            <TableActionBar />
            <div className="flex gap-4">
              <EmployeeCard
                id={1}
                username="Jerome Bell"
                position="Product Manager"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HR;
