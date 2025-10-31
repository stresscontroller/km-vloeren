import React from 'react';

interface ExperianCardProps {
  id: number;
  title: string;
  subtitle1: string;
  subdescription1: string;
  subtitle2: string;
  subdescription2: string;
  subtitle3: string;
  subdescription3: string;
}

const ExperianCard: React.FC<ExperianCardProps> = ({
  id,
  title,
  subtitle1,
  subdescription1,
  subtitle2,
  subdescription2,
  subtitle3,
  subdescription3,
}) => {
  return (
    <div
      className="flex flex-col relative py-4 px-8 gap-3 border border-gray-300 rounded-xl"
      key={id}
    >
      <p className="text-black font-semibold">{title}</p>
      <div className="border-b border-gray-300 py-2 space-y-2">
        <p className="">{subtitle1}</p>
        <p className="text-black">{subdescription1}</p>
      </div>
      <div className="border-b border-gray-300 py-2 space-y-2">
        <p className="">{subtitle2}</p>
        <p className="text-black">{subdescription2}</p>
      </div>
      <div className="border-b border-gray-300 py-2 space-y-2">
        <p className="">{subtitle3}</p>
        <p className="text-black">{subdescription3}</p>
      </div>
    </div>
  );
};

export default ExperianCard;
