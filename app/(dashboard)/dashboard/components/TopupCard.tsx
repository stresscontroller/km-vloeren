import React from 'react';
import Image from 'next/image';
import { IoIosSwap } from 'react-icons/io';

interface TopupCardProps {
  title: string;
}

const TopupCard: React.FC<TopupCardProps> = ({
  title,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-5">
      <p className="font-semibold">{title}</p>
      <div className="flex flex-col sm:flex-row justify-between text-sm mt-8">
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
          <button className="border border-blue-600 text-blue-600 rounded px-4 py-2 text-xs">
            Top Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopupCard;
