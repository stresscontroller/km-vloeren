'use client';
import { Check } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
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
const LicenseVerificationTable = () => {
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
  );
};

export default LicenseVerificationTable;
