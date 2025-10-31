import React, { Dispatch, SetStateAction } from 'react';
import { Card, CardContent, CardHeader } from '../../../../components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { VscFilePdf } from 'react-icons/vsc';

const applicantTableData = [
  {
    id: 1,
    name: 'Albert Flores',
    jobTitle: 'Project Manager',
    appliedDate: 'Aug 16, 2023',
    notes: 'A sapien mauris posre nisi risus elementum',
    resumeStatus: 'New',
  },
  {
    id: 2,
    name: 'Ullam obortis',
    jobTitle: 'Sales Associate',
    appliedDate: 'Aug 16, 2023',
    notes: '',
    resumeStatus: 'New',
  },
  {
    id: 3,
    name: 'Quam Cursus',
    jobTitle: 'Front End Engineer',
    appliedDate: 'Aug 16, 2023',
    notes: '',
    resumeStatus: 'Rejected',
  },
  {
    id: 4,
    name: 'Vene Faucibus',
    jobTitle: 'Director of Hospitality',
    appliedDate: 'Aug 16, 2023',
    notes: 'A sapien mauris posre nisi risus elementum',
    resumeStatus: 'Employed',
  },
];

const ApplicantTrackingTable = () => {
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
    <div className="p-4 min-w-full bg-white border border-gray-100 rounded-xl shadow-md mt-5">
      <table>
        <thead>
          <tr className="text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left w-[5%]">No.</th>
            <th className="py-3 px-6 text-left w-[20%]">Candidate Name</th>
            <th className="py-3 px-6 text-left w-[15%]">Job Title</th>
            <th className="py-3 px-6 text-left w-[15%]">Applied Date</th>
            <th className="py-3 px-6 text-left w-[10%]">Resume</th>
            <th className="py-3 px-6 text-left w-[25%]">Notes</th>
            <th className="py-3 px-6 text-left w-[5%]">Status</th>
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
                <VscFilePdf className="text-2xl text-blue-500" />
              </td>
              <td>{candidate.notes}</td>
              <td>
                <div className="flex gap-2 items-center">
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
  );
};

export default ApplicantTrackingTable;
