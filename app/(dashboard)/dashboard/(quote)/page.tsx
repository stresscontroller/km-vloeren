'use client';
import React from 'react';
import Image from 'next/image';

import { PiCar } from 'react-icons/pi';
import { PiHeartbeat } from 'react-icons/pi';
import { PiHouseLine } from 'react-icons/pi';
import { IoIosSwap } from 'react-icons/io';

import PayrollOverViewChart from '../components/PayrollOverViewChart';
import PayrollOverViewCard from '../components/PayrollOverViewCard';
import TaxSummaryChart from '../components/TaxSummaryChart';
import InsuranceStatusCard from '../components/InsuranceStatusCard';
import ExpensesTrackingChart from '../components/ExpensesTrackingChart';
import AccountStatisticChart from '../components/AccountStatisticChart';
import CreditScoreChart from '../components/CreditScoreChart';
import CreditScoreCard from '../components/CreditScoreCard';
import TopupCard from '../components/TopupCard';

const payrollCardsList = [
  {
    title: 'Payroll Cost',
    amount: '$12,500',
    percent: 20,
    date: 'last month',
  },
  {
    title: 'Total Expense',
    amount: '$2,560',
    percent: 0.1,
    date: 'last month',
  },
  {
    title: 'Pending Payments',
    amount: '$4,700',
    percent: -50,
    date: 'last month',
  },
  {
    title: 'Pending Payments',
    amount: '$4,700',
    percent: 10,
    date: 'last month',
  },
];

const insuranceData = [
  {
    icon: <PiCar className="text-2xl" />,
    title: 'Auto Insurance',
    progress: 20, // 20%
    amountLeft: '$920.3',
  },
  {
    icon: <PiHeartbeat className="text-2xl" />,
    title: 'Life Insurance',
    progress: 80, // 80%
    amountLeft: '$1254',
  },
  {
    icon: <PiHouseLine className="text-2xl" />,
    title: 'Home Insurance',
    progress: 40, // 40%
    amountLeft: '$682',
  },
];

const creditData = [
  {
    title: 'Payment history',
    progress: '100%',
    status: 'High Impact',
    description: 'Percentage of payments you have made on time',
  },
  {
    title: 'Credit card use',
    progress: '2%',
    status: 'High Impact',
    description: 'How much credit you are using compared to your total limits',
  },
  {
    title: 'Credit age',
    progress: '8 yrs',
    status: 'Medium Impact',
    description: 'Average are or your open accounts',
  },
  {
    title: 'Credit card use',
    progress: '28',
    status: 'Low Impact',
    description: 'Total open and closed accounts',
  },
];

const topupData = [
  {
    title: 'Family Insurrance',
  },
  {
    title: 'Family Insurrance',
  },
  {
    title: 'Family Insurrance',
  },
  {
    title: 'Refer a friend and earn $250',
  },
];

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="rounded-lg bg-white flex flex-col gap-3 p-10 shadow-md w-full lg:w-5/12">
          <div>
            <h5 className="text-lg">Banking OverView</h5>
            <p className="text-sm text-gray-600">Swipe for more details.</p>
          </div>
          <div className="flex gap-4">
            <div>
              <h4 className="text-lg font-semibold">$40,206.20</h4>
              <a className="text-sm text-gray-600">Total Saving</a>
            </div>
            <div>
              <h4 className="text-lg font-semibold">$20,324.32</h4>
              <a className="text-sm text-gray-600">Total Expenses</a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/banking-overview.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[400px] h-auto"
            />
          </div>
        </div>
        <div className="rounded-lg bg-white flex flex-col gap-3 shadow-md p-10 w-full lg:w-7/12">
          <div>
            <h5 className="text-lg">Payroll OverView</h5>
            <p className="text-sm text-gray-600">
              Current payroll run cost and upcoming payroll dates.
            </p>
          </div>
          <div className="flex flex-wrap">
            {payrollCardsList.map((card) => (
              <div className="p-1 w-full sm:w-6/12 xl:w-3/12">
                <PayrollOverViewCard key={card.title} card={card} />
              </div>
            ))}
          </div>
          <div className="h-[300px]">
            <PayrollOverViewChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="rounded-lg bg-white flex flex-col gap-3 p-10 shadow-md w-full lg:w-6/12">
          <div className="flex justify-between">
            <div>
              <h5 className="text-lg">Tax Summary</h5>
              <p className="text-sm text-gray-600">
                Stay on top your quarterly tax obligations.
              </p>
            </div>
            <a className="text-blue-500">More Details</a>
          </div>
          <div className="flex flex-col xl:flex-row gap-3">
            <div className="bg-green-50 flex flex-col gap-3 rounded-2xl py-5 w-full xl:w-7/12">
              <div className="px-4 text-sm space-y-3">
                <p className="text-center p-2 bg-green-200 rounded-full text-green-700">
                  January has been fully accounted
                </p>
                <p className="text-center text-gray-600">
                  Total Payment February
                </p>
                <p className="text-center text-lg font-semibold">$847.00</p>
              </div>
              <div className="h-[200px]">
                <TaxSummaryChart />
              </div>
            </div>
            <div className="w-full xl:w-5/12 flex flex-col gap-5">
              <div className="border border-gray-300 rounded-xl p-5 text-sm">
                <p className="text-gray-800">Income Tax</p>
                <p className="text-lg font-semibold mt-3">$425.00</p>
                <p className="text-red-500">20 Feb 2024 Overdue</p>
                <div className="flex justify-between mt-2">
                  <button className="text-xs p-1 bg-blue-100 text-blue-600 rounded-xl">
                    $ Pay Now
                  </button>
                  <button className="text-xs p-1 rounded-xl border border-gray-300 bg-gray-50 text-gray-600">
                    Details
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 rounded-xl p-5 text-sm">
                <p className="text-gray-800">Income Tax</p>
                <p className="text-lg font-semibold mt-3">$225.00</p>
                <p className="text-green-500">16 Jan 2024 Paid</p>
                <div className="flex justify-between mt-2">
                  <button className="text-xs p-1 rounded-xl border border-gray-300 bg-gray-50 text-gray-600">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white flex flex-col gap-3 p-10 shadow-md w-full lg:w-6/12">
          <div className="flex justify-between">
            <div>
              <h5 className="text-lg">Insurance Status</h5>
              <p className="text-sm text-gray-600">
                Monitor your policy coverage and expiration dates.
              </p>
            </div>
            <a className="text-blue-500">More Details</a>
          </div>
          <div className="flex flex-wrap">
            {insuranceData.map((insurance, index) => (
              <div className="p-1 w-full sm:w-4/12 lg:w-full">
                <InsuranceStatusCard
                  key={index}
                  icon={insurance.icon}
                  title={insurance.title}
                  progress={insurance.progress}
                  amountLeft={insurance.amountLeft}
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-xl p-5">
            <p className="font-semibold">Workmen's Compensation Plan</p>
            <div className="flex flex-col md:flex-row justify-between text-sm mt-8">
              <div className="flex itmes-center">
                <Image
                  src="/images/mattdawson-profile-09.png"
                  alt="Logo"
                  height={21.4}
                  width={150}
                  className="w-[50px] h-auto rounded-full border-2 border-white"
                />
                <Image
                  src="/images/user-01.png"
                  alt="Logo"
                  height={21.4}
                  width={150}
                  className="w-[50px] h-auto rounded-full border-2 border-white"
                />
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-green-500 font-semibold">$920.3 left</p>
                <IoIosSwap className="text-2xl" />
                <button className="border border-blue-600 text-blue-600 rounded px-4 py-2">
                  Top Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="rounded-lg bg-white flex flex-col gap-3 p-10 shadow-md w-full">
          <div className="flex justify-between">
            <div>
              <h5 className="text-lg">Accounting at a Glance</h5>
              <p className="text-sm text-gray-600">
                Key financial metrics to keep your business on track.
              </p>
            </div>
            <a className="text-blue-500">More Details</a>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="border border-gray-300 flex flex-col gap-3 rounded-2xl py-5 w-full lg:w-3/12">
              <div className="px-4 text-sm space-y-3">
                <p className="p-2 font-semibold">Expenses Tracking</p>
              </div>
              <div className="h-[350px]">
                <ExpensesTrackingChart />
              </div>
            </div>
            <div className="border border-gray-300 flex flex-col gap-3 rounded-2xl py-5 w-full lg:w-6/12">
              <div className="px-4 text-sm space-y-3">
                <p className="p-2 font-semibold">Account Statistic</p>
              </div>
              <div className="h-[350px]">
                <AccountStatisticChart />
              </div>
            </div>
            <div className="border border-gray-300 flex flex-col gap-3 rounded-2xl py-5 px-3 w-full lg:w-3/12">
              <div className="px-4 text-sm flex justify-between">
                <p className="font-semibold">Recent Transaction</p>
                <p className="text-blue-500">See All</p>
              </div>
              <div className="flex flex-row lg:flex-col xl:flex-row justify-between items-center px-4 border-b-2 border-gray-200 py-4">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/mattdawson-profile-09.png"
                    alt="Logo"
                    height={21.4}
                    width={150}
                    className="w-[50px] h-auto rounded-full"
                  />
                  <div>
                    <p className="font-semibold">KFC Food</p>
                    <p className="text-xs text-gray-600">1 hour ago</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">-$46.32</p>
              </div>
              <div className="flex flex-row lg:flex-col xl:flex-row justify-between items-center px-4 border-b-2 border-gray-200 py-4">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/user-01.png"
                    alt="Logo"
                    height={21.4}
                    width={150}
                    className="w-[50px] h-auto rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Walmart</p>
                    <p className="text-xs text-gray-600">1 hour ago</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">-$354.32</p>
              </div>
              <div className="flex flex-row lg:flex-col xl:flex-row justify-between items-center px-4 border-b-2 border-gray-200 py-4">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/mattdawson-profile-09.png"
                    alt="Logo"
                    height={21.4}
                    width={150}
                    className="w-[50px] h-auto rounded-full"
                  />
                  <div>
                    <p className="font-semibold">CitiBank</p>
                    <p className="text-xs text-gray-600">Yesterday</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">-$27.32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="rounded-lg bg-white flex flex-col gap-3 p-10 shadow-md w-full lg:w-7/12">
          <div className="flex justify-between">
            <div>
              <h5 className="text-lg">Business Credit Score</h5>
              <p className="text-sm text-gray-600">
                Understand your credit profile and how it impacts your business.
              </p>
            </div>
            <a className="text-blue-500">More Details</a>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-full lg:w-4/12">
              <div className="h-[300px] bg-gray-100 rounded-xl">
                <CreditScoreChart />
              </div>
              <div className="p-2 text-xs font-semibold text-blue-500 text-center bg-white">
                Update your credit score
              </div>
            </div>
            <div className="w-full lg:w-8/12">
              <div className="flex flex-wrap">
                {creditData.map((row, index) => (
                  <div key={index} className="w-6/12 p-1">
                    <CreditScoreCard
                      title={row.title}
                      progress={row.progress}
                      status={row.status}
                      description={row.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white flex flex-col gap-3 p-10 shadow-md w-full lg:w-5/12">
          <div className="flex justify-between">
            <div>
              <h5 className="text-lg">Upcoming Tasks</h5>
              <p className="text-sm text-gray-600">
                Understand your credit profile and how it impacts your business.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {creditData.map((row, index) => (
              <div key={index} className="w-6/12 p-1">
                <CreditScoreCard
                  title={row.title}
                  progress={row.progress}
                  status={row.status}
                  description={row.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-white shadow-md rounded-lg p-10">
        <div className="flex">
          <div className="flex flex-col gap-3 w-6/12">
            <div>
              <h5 className="text-lg">Updates from Clarity</h5>
              <p className="text-sm text-gray-600">
                Monitor your policy coverage and expiration dates.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-6/12">
            <div className="flex justify-between">
              <h5 className="text-lg">
                Get in touch with a<br /> member of our team
              </h5>
              <a className="text-blue-500">More Details</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {topupData.map((row, index) => (
            <div key={index} className="w-full lg:w-6/12 p-2">
              <TopupCard title={row.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
