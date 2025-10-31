import React from 'react';

interface Tab {
  label: string;
  value: number;
}

interface TabIndicatorProps {
  currentTab: number;
  tabs: Tab[];
  onTabChange: (index: number) => void;
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  currentTab,
  tabs,
  onTabChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          <div
            className={`cursor-pointer w-[200px] h-[80px] px-2 pl-4 border rounded-xl flex flex-col justify-center text-gray-600 ${
              currentTab === index
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300'
            }`}
            onClick={() => onTabChange(index)}
          >
            <p>{tab.label}</p>
            {currentTab === index ? (
              <p className='text-black font-semibold text-xl'>
                {tab.value}
              </p>
            ) : null}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabIndicator;
