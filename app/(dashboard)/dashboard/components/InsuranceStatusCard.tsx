import React from 'react';

interface InsuranceCardProps {
  icon: React.ReactNode;
  title: string;
  progress: number;
  amountLeft: string;
}

const InsuranceStatusCard: React.FC<InsuranceCardProps> = ({ icon, title, progress, amountLeft }) => {
  return (
    <div className="flex flex-col gap-5 border border-gray-300 rounded-xl p-5 text-sm rounded-2xl">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-gray-200 rounded-lg">
          {icon}
        </div>
        <p className="font-semibold">{title}</p>
      </div>
      <div className="bg-gray-300 rounded-full w-full h-2">
        <div className={`w-[${progress}%] h-full rounded-full bg-green-500`}></div>
      </div>
      <p className="font-semibold text-green-500">{amountLeft} left</p>
    </div>
  );
};

export default InsuranceStatusCard;
