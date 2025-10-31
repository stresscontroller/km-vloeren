import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-center items-center py-10">
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full ${
              currentStep === index + 1
                ? 'bg-[#5297FF] text-white shadow-lg'
                : currentStep > index + 1
                  ? 'bg-green-500 text-white'
                  : 'border lightgray text-black'
            }`}
          >
            {currentStep > index + 1 ? <span>&#10003;</span> : index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className="w-8 h-0.5 bg-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
