'use client';
import React from 'react';
import Image from 'next/image';
import { GoInfo } from 'react-icons/go';

import { RiInformation2Line } from 'react-icons/ri';

const TimeTracking = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-3">Time Tracking</h3>
          <p className="text-grey text-sm">
            You can also forward emails or send attachments at
            kaisarmatari@oneco.com
          </p>
          <div className="flex gap-4">
            <div className="rounded-xl shadow p-8 space-y-3 w-3/12">
              <Image
                src="/images/learning-card-01.png"
                alt="Logo"
                height={21.4}
                width={150}
                className="w-[120px] h-auto"
              />
              <p className="font-semibold">
                Consequat urna facilisis amet ellu id eget sit arcu
              </p>
              <p className="text-sm text-grey">
                Pulvinar morbi nam dolor turpis amet nisl et quis. Sed amet
                aliquet facilisis elemen justo sodales. Velit pellentesque odio
                consectetur vel por.
              </p>
              <button className="bg-blue-500 px-8 py-2 text-sm rounded text-white">
                CTA Button
              </button>
            </div>
            <div className="rounded-xl shadow p-8 space-y-3 w-3/12">
              <Image
                src="/images/learning-card-02.png"
                alt="Logo"
                height={21.4}
                width={150}
                className="w-[120px] h-auto"
              />
              <p className="font-semibold">
                Libero bibendum proin etiam curabitur sed ut penatibus
              </p>
              <p className="text-sm text-grey">
                Dignissim molestie lacus cursus eu tristique id donec enim diam.
                Viverra nisi pulvinar tristique aliquet pellentesque.
              </p>
              <button className="bg-blue-500 px-8 py-2 text-sm rounded text-white">
                CTA Button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Employee Timesheets</h3>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-8 items-center border border-gray-300 rounded-xl px-3 py-5 justify-around">
            <p className="font-semibold">Sept 9 - Sept 30, 2025</p>
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
          <div className="flex flex-wrap gap-8 items-center border border-gray-300 rounded-xl px-3 py-5 justify-around">
            <p className="font-semibold">Oct 7 - Oct 14, 2025</p>
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
      <div>
        <h3 className="text-xl font-semibold mb-3">Contractor Timesheets</h3>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-8 items-center border border-gray-300 rounded-xl px-3 py-5 justify-around">
            <p className="font-semibold">Contractors</p>
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
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Time Management Options
          </h3>
        </div>
        <div className="flex gap-8">
          <div className="w-8/12">
            <div className="flex gap-4">
              <div className="rounded-xl shadow p-8 space-y-3 w-4/12">
                <Image
                  src="/images/learning-card-01.png"
                  alt="Logo"
                  height={21.4}
                  width={150}
                  className="w-[120px] h-auto"
                />
                <p className="font-semibold">
                  Consequat urna facilisis amet ellu id eget sit arcu
                </p>
                <p className="text-sm text-grey">
                  Pulvinar morbi nam dolor turpis amet nisl et quis. Sed amet
                  aliquet facilisis elemen justo sodales. Velit pellentesque
                  odio consectetur vel por.
                </p>
                <button className="bg-blue-500 px-8 py-2 text-sm rounded text-white">
                  CTA Button
                </button>
              </div>
              <div className="rounded-xl shadow p-8 space-y-3 w-4/12">
                <Image
                  src="/images/learning-card-02.png"
                  alt="Logo"
                  height={21.4}
                  width={150}
                  className="w-[120px] h-auto"
                />
                <p className="font-semibold">
                  Libero bibendum proin etiam curabitur sed ut penatibus
                </p>
                <p className="text-sm text-grey">
                  Dignissim molestie lacus cursus eu tristique id donec enim
                  diam. Viverra nisi pulvinar tristique aliquet pellentesque.
                </p>
                <button className="bg-blue-500 px-8 py-2 text-sm rounded text-white">
                  CTA Button
                </button>
              </div>
              <div className="rounded-xl shadow p-8 space-y-3 w-4/12">
                <Image
                  src="/images/learning-card-03.png"
                  alt="Logo"
                  height={21.4}
                  width={150}
                  className="w-[120px] h-auto"
                />
                <p className="font-semibold">
                  Libero bibendum proin etiam curabitur sed ut penatibus
                </p>
                <p className="text-sm text-grey">
                  Dignissim molestie lacus cursus eu tristique id donec enim
                  diam. Viverra nisi pulvinar tristique aliquet pellentesque.
                </p>
                <button className="bg-blue-500 px-8 py-2 text-sm rounded text-white">
                  CTA Button
                </button>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="w-full p-6 flex items-center gap-3 shadow rounded">
              <GoInfo className="text-xl" />
              <p className="font-semibold">
                Mauris nisl metus elit pretium orci non.
                <a className="text-blue-500 underline">Maecenas. </a>
              </p>
            </div>
            <div className="w-full p-6 flex gap-3 shadow rounded">
              <div>
                <GoInfo className="text-xl" />
              </div>
              <div className="space-y-3">
                <p className="font-semibold">
                  Mauris nisl metus elit pretium orci non maecenas?{' '}
                </p>
                <p className="text-grey">
                  Molestie interdum neque etiam volutpat. At sed consectetur
                  egestas tempor purus suspendisse id rhoncus tincidunt. Eu
                  consequat fermentum sagittis amet fusce aliquam sit tincidunt
                  adipiscing.
                </p>
                <p className="text-grey">
                  Odio nam aliquet suspense nulla ipsum faucibus platea sit.
                  Volutpat et magnis nunc condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;
