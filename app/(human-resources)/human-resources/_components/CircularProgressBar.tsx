import React from 'react';

interface DataItem {
  title: string;
  value: number;
  color: string;
}

interface CircularProgressBarProps {
  data: DataItem[];
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const radius = 100;
  const circumference = 2 * Math.PI * radius;

  const calculateDashArray = (value: number): number => {
    const percentage = (value / total) * 100;
    return (percentage * circumference) / 100;
  };

  return (
    <div className="flex gap-4">
      <div className='flex items-center justify-center flex-col relative'>
        <svg width="240" height="240">
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="20"
          />
          {data.map((item, index) => {
            const dashArray = calculateDashArray(item.value);
            const offset =
              index === 0
                ? 0
                : calculateDashArray(
                    data.slice(0, index).reduce((acc, d) => acc + d.value, 0)
                  );

            return (
              <circle
                key={index}
                cx="120"
                cy="120"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={`${dashArray} ${circumference}`}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
              />
            );
          })}
        </svg>
        <div className="absolute text-center top-[100px]">
          <h2 className="text-xl ">Facibus libero</h2>
          <p className="text-2xl font-bold">{total}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <span
              className={`w-4 h-4 rounded-full mr-2`}
              style={{ backgroundColor: item.color }}
            ></span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularProgressBar;
