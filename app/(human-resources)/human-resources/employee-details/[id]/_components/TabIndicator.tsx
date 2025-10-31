import React from 'react';

interface TabIndicatorProps {
  currentTab: number;
  tabs: string[];
  onTabChange: (index: number) => void;
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  currentTab,
  tabs,
  onTabChange,
}) => {
  return (
    <div className="flex items-center">
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          <div
            className={`cursor-pointer px-6 py-2 text-center transition-colors duration-300 relative ${
              currentTab === index
                ? 'text-black font-semibold'
                : 'text-gray-400 hover:text-black'
            }`}
            onClick={() => onTabChange(index)}
          >
            {tab}
            {currentTab === index ? (
              <div className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-blue-500 rounded-full" />
            ) : (
              <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gray-200" />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TabIndicator;
