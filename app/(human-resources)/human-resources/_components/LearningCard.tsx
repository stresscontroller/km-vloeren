import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeartSharp } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaEllipsisVertical } from 'react-icons/fa6';

interface LearningCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const LearningCard: React.FC<LearningCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl shadow p-8 space-y-3 w-4/12">
      <Image
        src={imageUrl}
        alt="Logo"
        height={21.4}
        width={150}
        className="w-[120px] h-auto"
      />
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-grey">{description}</p>
      <div className="flex justify-center pt-6">
        <button className="bg-blue-500 px-8 py-2 text-sm rounded text-white ">
          CTA Button
        </button>
      </div>
    </div>
  );
};

export default LearningCard;
