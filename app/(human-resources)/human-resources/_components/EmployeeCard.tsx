import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeartSharp } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaEllipsisVertical } from 'react-icons/fa6';

interface EmployeeCardProps {
  id: number;
  username: string;
  position: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  username,
  position,
}) => {
  return (
    <div className="flex flex-col relative py-4 px-8 items-center gap-3 shadow">
      <Link
        href={`/human-resources/employee-details/${id}`}
        className="absolute top-4 right-2"
      >
        <FaEllipsisVertical className="text-grey text-lg" />
      </Link>
      <Image
        src="/images/mattdawson-profile-09.png"
        alt="Logo"
        height={21.4}
        width={150}
        className="w-[100px] h-auto rounded-full"
      />
      <p>{username}</p>
      <p className="text-sm text-grey">{position}</p>
      <div className="flex justify-center gap-3">
        <IoHeartSharp className="text-2xl text-red-500" />
        <LuCalendarClock className="text-2xl text-grey" />
        <AiOutlineMessage className="text-2xl text-blue-500" />
      </div>
    </div>
  );
};

export default EmployeeCard;
