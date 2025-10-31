import React from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';

interface CreditScoreCardProps {
  title: string;
  progress: string;
  status: string;
  description: string;
}

const CreditScoreCard: React.FC<CreditScoreCardProps> = ({
  title,
  progress,
  status,
  description,
}) => {
  return (
    <div className="flex flex-col gap-5 border border-gray-300 rounded-xl p-5 text-sm rounded-2xl h-full w-full">
      <div className="flex gap-2 justify-between items-center">
        <p className="text-gray-600">{title}</p>
        <PiArrowUpRightBold className="text-lg text-blue-500" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <p className="text-lg font-semibold">{progress}</p>
        <div className="p-1 bg-green-500 text-xs rounded">{status}</div>
      </div>
      <p className="text-xs text-gray-600">{description} left</p>
    </div>
  );
};

export default CreditScoreCard;
