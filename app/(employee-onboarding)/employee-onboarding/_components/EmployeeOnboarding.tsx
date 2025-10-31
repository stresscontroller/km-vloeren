'use client';
import { AiOutlineHome } from 'react-icons/ai';
import { useAppSelector } from '@/lib/hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import ActionButton from './ActionButton';
import { useState } from 'react';

const EmployeeOnboarding = () => {
  const quoteOption = useAppSelector(
    (state) => state.employeeOnboarding.formData?.quote
  );

  const [selected] = useState<string | null>(quoteOption || null);
  const currentStep = useAppSelector(
    (state) => state.employeeOnboarding.currentStep
  );

  const steps = [
    'Personal Info',
    'Health Benefits',
    'Employee Documents',
    'Direct Deposit',
    'New Hire Basics',
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-68 p-6 min-h-screen border-r border-gray-200">
          <div className="flex items-center mb-6">
            <AiOutlineHome className="text-blue-500 text-xl" />
            <a href="/" className="text-blue-500 ml-2 text-sm hover:underline">
              Back to Dashboard
            </a>
          </div>

          <div className="space-y-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center relative">
                {index > 0 && (
                  <div
                    className={`absolute left-[9px] -top-7 h-7 w-[1px] ${
                      index < currentStep - 1 ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
                <div
                  className={`w-[18px] h-[18px] flex items-center justify-center rounded-full ${
                    index < currentStep - 1
                      ? 'bg-white'
                      : index === currentStep - 1
                        ? 'border border-gray-400 bg-white'
                        : 'border border-gray-300 bg-white'
                  }`}
                >
                  {index < currentStep - 1 && (
                    <span className="text-sm ">✔</span>
                  )}
                </div>
                <span
                  className={`ml-3 ${
                    index === currentStep - 1
                      ? 'text-black font-medium'
                      : 'text-gray-500 text-sm'
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-20">{renderStep()}</div>
      </div>

      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </div>
  );
};

export default EmployeeOnboarding;
