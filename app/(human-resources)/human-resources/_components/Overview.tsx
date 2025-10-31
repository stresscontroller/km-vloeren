'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { VscFilePdf } from 'react-icons/vsc';
import { GiSandsOfTime } from 'react-icons/gi';
import { LuShieldCheck } from 'react-icons/lu';
import { LuAlarmClock } from 'react-icons/lu';
import { IoMdFingerPrint } from 'react-icons/io';
import { GoInfo } from 'react-icons/go';

import CircularProgressBar from './CircularProgressBar';
import EmployeeCard from './EmployeeCard';

const applicantTableData = [
  {
    id: 1,
    name: 'Albert Flores',
    jobTitle: 'Project Manager',
    appliedDate: 'Aug 16, 2023',
    resumeStatus: 'New',
  },
  {
    id: 2,
    name: 'Ullam obortis',
    jobTitle: 'Sales Associate',
    appliedDate: 'Aug 16, 2023',
    resumeStatus: 'New',
  },
  {
    id: 3,
    name: 'Quam Cursus',
    jobTitle: 'Front End Engineer',
    appliedDate: 'Aug 16, 2023',
    resumeStatus: 'Rejected',
  },
  {
    id: 4,
    name: 'Vene Faucibus',
    jobTitle: 'Director of Hospitality',
    appliedDate: 'Aug 16, 2023',
    resumeStatus: 'Employed',
  },
];

const applicantProgressBarData = [
  { title: 'Title 1', value: 150, color: '#4c8bf5' },
  { title: 'Title 2', value: 100, color: '#4cd64b' },
  { title: 'Title 3', value: 50, color: '#a45ee9' },
  { title: 'Title 4', value: 80, color: '#36d7d0' },
  { title: 'Title 5', value: 20, color: '#f57d20' },
  { title: 'Title 6', value: 0, color: '#e0e0e0' },
];

const backgroundCheckTableData = [
  {
    id: 1,
    reportType: 'Background',
    name: 'Albert Flores',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Active',
  },
  {
    id: 2,
    reportType: 'Drug est',
    name: 'Albert Flores',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Completed',
  },
  {
    id: 3,
    reportType: 'Background',
    name: 'Vellen isus',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Pending',
  },
  {
    id: 4,
    reportType: 'Background',
    name: 'Vellen isus',
    orderDate: 'Aug 16, 2023',
    dateUpdated: 'Aug 16, 2023',
    status: 'Completed',
  },
];

const licenseTableData = [
  {
    id: 1,
    licenseNumber: 'XXXX-983N-08N3-30923',
    licenseType: 'Volutpat Dictumst',
    name: 'Nulla Eros',
    expirationDate: 'Aug 16, 2023',
    updatedDate: 'Aug 16, 2023',
    status: 'Active',
  },
  {
    id: 2,
    licenseNumber: 'XXXX-0000-08N3-30923',
    licenseType: 'Morbi Nulla',
    name: 'Albert Flores',
    expirationDate: 'Aug 16, 2023',
    updatedDate: 'Aug 16, 2023',
    status: 'Completed',
  },
  {
    id: 3,
    licenseNumber: 'XXXX-839H-8372H-30923',
    licenseType: 'Tristique Leo',
    name: 'Vellen isus',
    expirationDate: 'Aug 16, 2023',
    updatedDate: 'Aug 16, 2023',
    status: 'Pending',
  },
  {
    id: 4,
    licenseNumber: 'XXXX-0000-08N3-30923',
    licenseType: 'Mauris',
    name: 'Albert Flores',
    expirationDate: 'Aug 16, 2023',
    updatedDate: 'Aug 16, 2023',
    status: 'Completed',
  },
];

const Overview = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-purple-500';
      case 'Rejected':
        return 'bg-orange-500';
      case 'Employed':
        return 'bg-green-500';
      case 'Active':
        return 'bg-purple-500';
      case 'Completed':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-orange-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-100 rounded-xl w-full flex p-10">
        <div className="w-8/12 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">
            Odio donec pharetra est dui etiam malesuada ullamcorpe ongue eget id
            ac nulla. Morbi erat morbi etiam purus!
          </h3>
          <span className="text-sm">
            Nisl et interdum semper at orci vitae arcu eu. Fermentum urna in
            interdum eget. Et nulla nulla vitae pharetra nibh tempor at. Netus
            fames eget lacus nunc in ridiculus facilisi ultrices fermentum.
            Massa pharetra quis aliquam!
          </span>
          <a className="text-blue-500 font-semibold">Non porta tellus viverra nullam dui </a>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <Image
            src="/images/hr-01.png"
            alt="Logo"
            height={21.4}
            width={150}
            className="w-[240px] h-auto"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
        <div className="flex gap-3">
          <div className="shadow rounded-xl flex p-4 gap-2 items-center">
            <Image
              src="/images/hr-quick-01.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[100px] h-auto"
            />
            <p className="font-semibold">
              Consequat urna facilisis amet eget ellu id eget
            </p>
          </div>
          <div className="shadow rounded-xl flex p-4 gap-2 items-center">
            <Image
              src="/images/hr-quick-02.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[100px] h-auto"
            />
            <p className="font-semibold">
              Bibendum enim ut orci ultrices tortor sagittis sed interdum
            </p>
          </div>
          <div className="shadow rounded-xl flex p-4 gap-2 items-center">
            <Image
              src="/images/hr-quick-03.png"
              alt="Logo"
              height={21.4}
              width={150}
              className="w-[100px] h-auto"
            />
            <p className="font-semibold">
              Mauris nisl metus elit vellum pretium orci non menas
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-8/12">
          <h3 className="text-xl font-semibold mb-3">Applicant Tracking</h3>
          <p className="text-grey text-sm">
            Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed amet
            aliquet facilisis elementum justo sodales. Velit pellentesque odio
            consectetur porttitor in. Duis egestas felis eget dictumst diam
            neque morbi consequat nunc. Consequat pulvinar orci non vivamus.
            Dignissim pellentesque nullam id orci convallis vellum lorem.
          </p>
          <div className="p-4 min-w-full bg-white border border-gray-100 rounded-xl shadow-md mt-5">
            <table>
              <thead>
                <tr className="text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left w-[5%]">No.</th>
                  <th className="py-3 px-6 text-left w-[25%]">
                    Candidate Name
                  </th>
                  <th className="py-3 px-6 text-left w-[25%]">Job Title</th>
                  <th className="py-3 px-6 text-left w-[25%]">Applied Date</th>
                  <th className="py-3 px-6 text-left w-[20%]">Resume</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {applicantTableData.map((candidate) => (
                  <tr
                    key={candidate.id}
                    className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                  >
                    <td className="py-3 px-6">{candidate.id}</td>
                    <td className="py-3 px-6 flex gap-2 items-center">
                      <Image
                        src="/images/user-02.png"
                        alt="Logo"
                        height={21.4}
                        width={150}
                        className="w-[50px] h-auto"
                      />
                      <p>{candidate.name}</p>
                    </td>
                    <td className="py-3 px-6">{candidate.jobTitle}</td>
                    <td className="py-3 px-6">{candidate.appliedDate}</td>
                    <td className="py-3 px-6">
                      <div className="flex gap-3 items-center">
                        <VscFilePdf className="text-2xl text-blue-500 mr-6" />
                        <span
                          className={`inline-block w-3 h-3 rounded-full ${getStatusColor(candidate.resumeStatus)}`}
                        ></span>
                        <p> {candidate.resumeStatus}</p>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={5} className="py-5">
                    <div className="mt-4 text-center">
                      <button className="bg-white text-blue-500 border-blue-500 border  py-2 px-4 rounded">
                        View All Tracking
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-4/12">
          <div className="shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Tracking Charts</h3>
            <CircularProgressBar data={applicantProgressBarData} />
            <p className="text-grey mt-6">
              Ut enim morbi duis diam sed malesuada. Eu pharetra vulputate erat
              cursus nulla tempus sagittis neque quis.
            </p>
            <p className="text-grey mt-6">
              Convallis habitasse dolor non sed semper condimentum. Neque
              facilisis feugiat consectetur vel in nunc. Pulvinar integer in
              feugiat nullam facilisi. Lectus eu eu pellentesque amet elementum
              fermentum id dolor nisi. Blandit ullamcorper aliquam morbi.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-8/12">
          <h3 className="text-xl font-semibold mb-3">Background Check</h3>
          <p className="text-grey text-sm">
            Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed amet
            aliquet facilisis elementum justo sodales. Velit pellentesque odio
            consectetur porttitor in. Duis egestas felis eget dictumst diam
            neque morbi consequat nunc. Consequat pulvinar orci non vivamus.
          </p>
          <div className="p-4 min-w-full bg-white border border-gray-100 rounded-xl shadow-md mt-5">
            <table>
              <thead>
                <tr className="text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left w-[5%]">No.</th>
                  <th className="py-3 px-6 text-left w-[20%]">Report Type</th>
                  <th className="py-3 px-6 text-left w-[20%]">
                    Applicant name
                  </th>
                  <th className="py-3 px-6 text-left w-[20%]">Order Date</th>
                  <th className="py-3 px-6 text-left w-[20%]">Date Updated</th>
                  <th className="py-3 px-6 text-left w-[15%]">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {backgroundCheckTableData.map((candidate) => (
                  <tr
                    key={candidate.id}
                    className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                  >
                    <td className="py-3 px-6">{candidate.id}</td>
                    <td className="py-3 px-6">{candidate.reportType}</td>
                    <td className="py-3 px-6 flex gap-2 items-center">
                      <Image
                        src="/images/user-02.png"
                        alt="Logo"
                        height={21.4}
                        width={150}
                        className="w-[50px] h-auto"
                      />
                      <p>{candidate.reportType}</p>
                    </td>
                    <td className="py-3 px-6">{candidate.name}</td>
                    <td className="py-3 px-6">{candidate.orderDate}</td>
                    <td className="py-3 px-6">
                      <div className="flex gap-3 items-center">
                        <span
                          className={`inline-block py-1 px-3 text-xs rounded-full text-white ${getStatusColor(candidate.status)}`}
                        >
                          <p> {candidate.status}</p>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={5} className="py-5">
                    <div className="mt-4 text-center">
                      <button className="bg-white text-blue-500 border-blue-500 border  py-2 px-4 rounded">
                        View All Tracking
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-4/12">
          <div className="shadow p-6 space-y-5">
            <h3 className="text-xl font-semibold mb-3">Activity</h3>
            <div className="flex gap-3">
              <div>
                <span className="inline-block p-3 rounded-full bg-blue-500"></span>
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">4</p>
                <div>
                  <p className="font-semibold">Verified</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <GiSandsOfTime className="text-orange-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">10</p>
                <div>
                  <p className="font-semibold">Unverified</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <LuShieldCheck className="text-purple-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">2</p>
                <div>
                  <p className="font-semibold">Criminal Records</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <LuAlarmClock className="text-green-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">10</p>
                <div>
                  <p className="font-semibold">Enim elementum lacus</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <IoMdFingerPrint className="text-red-500 text-2xl" />
              </div>
              <div className="flex gap-4">
                <p className="font-semibold">23</p>
                <div>
                  <p className="font-semibold">Dui porta nunc</p>
                  <p className="text-grey text-sm">
                    Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed
                    amet aliquet facilisis elem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-8/12">
          <h3 className="text-xl font-semibold mb-3">Background Check</h3>
          <p className="text-grey text-sm">
            Pulvinar morbi nam dolor turpis amet at nisl et quis. Sed amet
            aliquet facilisis elementum justo sodales. Velit pellentesque odio
            consectetur porttitor in. Duis egestas felis eget dictumst diam
            neque morbi consequat nunc. Consequat pulvinar orci non vivamus.
          </p>
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
                aliquet facilisis elemen justo sodales. Velit pellentesque odio
                consectetur vel por.
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
                Dignissim molestie lacus cursus eu tristique id donec enim diam.
                Viverra nisi pulvinar tristique aliquet pellentesque.
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
                Dignissim molestie lacus cursus eu tristique id donec enim diam.
                Viverra nisi pulvinar tristique aliquet pellentesque.
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
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">
          License Verification
          <a className="underline text-blue-500 text-sm ml-3">View All</a>
        </h3>
        <div className="p-4 min-w-full bg-white border border-gray-100 rounded-xl shadow-md mt-5">
          <table>
            <thead>
              <tr className="text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left w-[5%]">No.</th>
                <th className="py-3 px-6 text-left w-[25%]">License Number</th>
                <th className="py-3 px-6 text-left w-[15%]">License Type</th>
                <th className="py-3 px-6 text-left w-[15%]">Applicant Name</th>
                <th className="py-3 px-6 text-left w-[15%]">Expiration Date</th>
                <th className="py-3 px-6 text-left w-[15%]">Updated</th>
                <th className="py-3 px-6 text-left w-[10%]">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {licenseTableData.map((candidate) => (
                <tr
                  key={candidate.id}
                  className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                >
                  <td className="py-3 px-6">{candidate.id}</td>
                  <td className="py-3 px-6">{candidate.licenseNumber}</td>
                  <td className="py-3 px-6">{candidate.licenseType}</td>
                  <td className="py-3 px-6 flex gap-2 items-center">
                    <Image
                      src="/images/user-02.png"
                      alt="Logo"
                      height={21.4}
                      width={150}
                      className="w-[50px] h-auto"
                    />
                    <p>{candidate.name}</p>
                  </td>
                  <td className="py-3 px-6">{candidate.expirationDate}</td>
                  <td className="py-3 px-6">{candidate.updatedDate}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-3 items-center">
                      <span
                        className={`inline-block py-1 px-3 text-xs rounded-full text-white ${getStatusColor(candidate.status)}`}
                      >
                        <p> {candidate.status}</p>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">
          Employees
          <a className="underline text-blue-500 text-sm ml-3">View All</a>
        </h3>
        <div>
          <div className="w-2/12">
            <EmployeeCard
              id={1}
              username="Jenny Wilson"
              position="VP of Marketing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
