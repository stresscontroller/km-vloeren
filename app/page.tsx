'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbBrandPaypalFilled } from 'react-icons/tb';
import { FaEllipsisV } from 'react-icons/fa';
import { FaDropbox } from 'react-icons/fa';
import { FaXingSquare } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RiInformation2Line } from 'react-icons/ri';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsJournalPlus } from 'react-icons/bs';

const DashboardPage = () => {
  const percentage = 70;
  const [intro, setIntro] = useState<boolean>(true);
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="flex gap-10">
      <div className="w-8/12 flex flex-col gap-12">
        {intro ? (
          <div className="bg-blue-600 p-8 relative text-white rounded-xl">
            <button
              type="button"
              className="absolute top-0 right-0 p-2 text-sm inline-flex items-center justify-center text-white"
              onClick={() => setIntro(false)}
            >
              <span className="mr-2">Close</span>
              <svg
                className="h-4 w-4"
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
            <h3 className="font-bold text-3xl">Good morning, Matt Dawson!</h3>
            <p className="mt-3">Today is: Monday, Match 20 2023</p>
            <p>Here's what's going on with your team at Artivist.</p>
          </div>
        ) : (
          <h2 className="text-4xl font-bold">Dashboard</h2>
        )}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl mb-1">Things to do</h3>
          <div className="rounded-xl bg-white border-l-4 border-green-500 shadow-md p-3 flex items-center gap-5">
            <Image
              src="/images/dashboard-card-01.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[150px] h-auto"
            />
            <div>
              <h4 className="text-xl font-semibold">
                Approve Background Checks
              </h4>
              <p className="my-4 text-gray-600">
                Time to make employees happy (and the government too). Approve
                pay for the Mar 11 - Mar 24 pay period.
              </p>
              <a className="text-blue-500 font-semibold">Let's do it!</a>
            </div>
          </div>
          <div className="rounded-xl bg-white border-l-4 border-yellow-500 shadow-md p-3 flex items-center gap-5">
            <Image
              src="/images/dashboard-card-02.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[150px] h-auto"
            />
            <div>
              <h4 className="text-xl font-semibold">Run payroll</h4>
              <p className="my-4 text-gray-600">
                Time to make employees happy (and the government too). Approve
                pay for the Mar 11 - Mar 24 pay period.
              </p>
              <a className="text-blue-500 font-semibold">Let's do it!</a>
            </div>
          </div>
          <div className="rounded-xl bg-white border-l-4 border-blue-500 shadow-md p-3 flex items-center gap-5">
            <Image
              src="/images/dashboard-card-03.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[150px] h-auto"
            />
            <div>
              <h4 className="text-xl font-semibold">
                Review Employee Expenses
              </h4>
              <p className="my-4 text-gray-600">
                Time to make employees happy (and the government too). Approve
                pay for the Mar 11 - Mar 24 pay period.
              </p>
              <a className="text-blue-500 font-semibold">Let's do it!</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl mb-6">Employee Cards</h3>
          <div className="shadow-md rounded-xl p-4 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">Virtual Cards</h4>
              <div className="flex gap-4">
                <div className="border border-gray-300 rounded-xl w-4/12 relative p-4 ">
                  <TbBrandPaypalFilled className="absolute top-4 right-4 text-blue-800 text-2xl" />
                  <p className="text-sm text-yellow-500">Operations</p>
                  <p className="text-lg font-semibold">CityBank</p>
                  <p className="text-sm text-gray-700">x9678</p>
                  <p className="text-lg font-semibold mt-6">$13,023.00</p>
                  <FaEllipsisV className="absolute bottom-6 right-5" />
                </div>
                <div className="border border-gray-300 rounded-xl w-4/12 relative p-4 ">
                  <FaXingSquare className="absolute top-4 right-4 text-red-600 text-2xl" />
                  <p className="text-sm text-yellow-500">Payroll</p>
                  <p className="text-lg font-semibold">JPMorgan</p>
                  <p className="text-sm text-gray-700">x9678</p>
                  <p className="text-lg font-semibold mt-6">$22,601.00</p>
                  <FaEllipsisV className="absolute bottom-6 right-5" />
                </div>
                <div className="border border-gray-300 rounded-xl w-4/12 relative p-4 ">
                  <FaDropbox className="absolute top-4 right-4 text-sky-500 text-2xl" />
                  <p className="text-sm text-yellow-500">Tax</p>
                  <p className="text-lg font-semibold">Bank of America</p>
                  <p className="text-sm text-gray-700">x9678</p>
                  <p className="text-lg font-semibold mt-6">$1,361.40</p>
                  <FaEllipsisV className="absolute bottom-6 right-5" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl">Physical Cards</h4>
              <div className="flex gap-4">
                <div className="border border-gray-300 rounded-xl w-4/12 relative p-4 ">
                  <TbBrandPaypalFilled className="absolute top-4 right-4 text-blue-800 text-2xl" />
                  <p className="text-sm text-yellow-500">Operations</p>
                  <p className="text-lg font-semibold">CityBank</p>
                  <p className="text-sm text-gray-700">x9678</p>
                  <p className="text-lg font-semibold mt-6">$13,023.00</p>
                  <FaEllipsisV className="absolute bottom-6 right-5" />
                </div>
                <div className="border border-gray-300 rounded-xl w-4/12 relative p-4 ">
                  <FaXingSquare className="absolute top-4 right-4 text-red-600 text-2xl" />
                  <p className="text-sm text-yellow-500">Payroll</p>
                  <p className="text-lg font-semibold">JPMorgan</p>
                  <p className="text-sm text-gray-700">x9678</p>
                  <p className="text-lg font-semibold mt-6">$22,601.00</p>
                  <FaEllipsisV className="absolute bottom-6 right-5" />
                </div>
                <div className="border border-gray-300 rounded-xl w-4/12 relative p-4 ">
                  <FaDropbox className="absolute top-4 right-4 text-sky-500 text-2xl" />
                  <p className="text-sm text-yellow-500">Tax</p>
                  <p className="text-lg font-semibold">Bank of America</p>
                  <p className="text-sm text-gray-700">x9678</p>
                  <p className="text-lg font-semibold mt-6">$1,361.40</p>
                  <FaEllipsisV className="absolute bottom-6 right-5" />
                </div>
              </div>
            </div>
            <a className="text-blue-500 font-semibold text-md flex gap-2 justify-center">
              View all cards <FaArrowRightLong />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl mb-6">Timesheets</h3>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-8 items-center border border-gray-300 rounded-xl px-3 py-5 justify-center">
              <p className="font-semibold">Employees</p>
              <div>
                <p className="text-sm">Status</p>
                <p className="test-lg font-semibold">Active pay period</p>
              </div>
              <div>
                <p className="text-sm">Last sync to payroll</p>
                <p className="test-lg font-semibold">Sync pending</p>
              </div>
              <div className="bg-gray-200 rounded-full text-xs px-5 py-2 flex gap-2 items-center">
                Due in 14 days <RiInformation2Line className="text-lg" />
              </div>
              <button className="bg-blue-500 rounded-xl text-white px-5 py-2">
                Review & Sync
              </button>
            </div>
            <div className="flex flex-wrap gap-8 items-center border border-gray-300 rounded-xl px-3 py-5 justify-center">
              <p className="font-semibold">Employees</p>
              <div>
                <p className="text-sm">Status</p>
                <p className="test-lg font-semibold">Active pay period</p>
              </div>
              <div>
                <p className="text-sm">Last sync to payroll</p>
                <p className="test-lg font-semibold">Sync pending</p>
              </div>
              <div className="bg-gray-200 rounded-full text-xs px-5 py-2 flex gap-2 items-center">
                Due in 14 days <RiInformation2Line className="text-lg" />
              </div>
              <button className="bg-blue-500 rounded-xl text-white px-5 py-2">
                Review & Sync
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12 flex flex-col gap-8">
        <div>
          <svg width="120" height="120">
            <circle
              stroke="lightgray"
              fill="transparent"
              r={normalizedRadius}
              strokeWidth={strokeWidth}
              cx="60"
              cy="60"
            />
            <circle
              stroke="#3897f3"
              fill="transparent"
              r={normalizedRadius}
              strokeWidth={strokeWidth}
              cx="60"
              cy="60"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.5s ease 0s' }}
              strokeLinecap="round" // Rounded ends
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              stroke="black"
              strokeWidth="1px"
              dy=".3em"
            >
              {`${percentage}%`}
            </text>
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-xl">Active Payrolls</h4>
          <p className="text-sm text-gray-400">Regular</p>
          <p className="text-sm text-gray-600">Friday, Match 31</p>
          <div className="bg-lime-600 p-2 rounded-full text-white text-sm w-60 text-center">
            Autodebt payroll is <span className="font-semibold">Active.</span>
          </div>
          <hr className="my-3"></hr>
          <a className="text-blue-500 text-sm underline">
            View payroll history
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-xl">Upcoming</h4>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">Wednesday, March 29</p>
            <p className="text-sm text-gray-600">
              Debit $78,928 from company bank account
            </p>
            <hr className=""></hr>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">Friday, March 31</p>
            <p className="text-sm text-gray-600">Next employee payday</p>
            <hr className=""></hr>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">Tuesday, April 25</p>
            <p className="text-sm text-gray-600">Payroll on AutoDebt</p>
            <hr className=""></hr>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="font-semibold text-xl">Celebrations</h4>
          <div className="relative">
            <p className="text-sm text-gray-400">Tuesday, March 28</p>
            <p className="text-sm text-gray-600">Kathryn Murphy first day</p>
            <Image
              src="/images/user-01.png"
              alt="Logo"
              height={100}
              width={100}
              className="w-[45px] rounded-full h-auto absolute right-0 top-0"
            />
          </div>
          <hr className=""></hr>
          <div className="relative">
            <p className="text-sm text-gray-400">Tuesday, March 28</p>
            <p className="text-sm text-gray-600">Kathryn Murphy first day</p>
            <a className="text-sm text-blue-500 flex gap-3 items-center">
              <FaRegEnvelope />
              Send a Card
            </a>
            <Image
              src="/images/user-01.png"
              alt="Logo"
              height={100}
              width={100}
              className="w-[45px] rounded-full h-auto absolute right-0 top-0"
            />
          </div>
          <hr className=""></hr>
          <a className="text-sm text-blue-500 flex gap-3 items-center">
            <BsJournalPlus />
            Add reminders to your calendar
          </a>
        </div>
        <div className="flex flex-col gap-3 border-2 border-gray-200 rounded-xl px-4 py-8">
          <Image
            src="/images/dashboard-card-04.png"
            alt="Logo"
            height={21.4}
            width={150}
            className="w-[100px] h-auto"
          />
          <h4 className="text-xl font-semibold">
            Your business credit score is ready !
          </h4>
          <p className="text-sm text-gray-500">
            A pulvinar viverra pretium nec euismod ut at ullamcorper consequat.
            Tell us facilisis consequat nibh mi vitae nibh adipiscing.
          </p>
          <Button className="bg-primary text-white w-full h-12 whitespace-nowrap">
            Check Business Score
          </Button>
        </div>
        <div className="flex flex-col gap-3 border-2 border-gray-200 rounded-xl px-4 py-8">
          <Image
            src="/images/dashboard-card-05.png"
            alt="Logo"
            height={21.4}
            width={150}
            className="w-[100px] h-auto"
          />
          <h4 className="text-xl font-semibold">
            Ready to secure your account?
          </h4>
          <p className="text-sm text-gray-500">
            2-step verification is the best way to keep your company's account
            safe
          </p>
          <a className="underline text-blue-500">Learn more</a>
          <Button className="bg-primary text-white w-full whitespace-nowrap">
            Turn on 2-step verification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
