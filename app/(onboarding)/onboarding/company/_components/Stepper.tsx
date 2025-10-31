"use client"

import { useAppSelector } from '@/lib/hooks';
import { Check } from 'lucide-react';

const steps = [
  'Company Address',
  'Bank Account',
  'Federal Tax Info',
  'Health Benefits',
  'Choose A Plan',
];

export default function Stepper() {
  const currentStep = useAppSelector(state => state.companyOnboarding.currentStep)

  return (
    <div className="flex flex-col items-start mt-10">
      {steps.map((step, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 flex items-center justify-center rounded-full border ${currentStep > index ? 'border-transparent bg-transparent text-white' : currentStep === index ? 'border-black text-black font-bold' : 'border-gray-300'}`}
            >
              {currentStep > index ? (
                <Check className='text-green-500' />
              ) : (
                null
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`h-8 border-l ${currentStep > index ? 'border-transparent' : 'border-gray-300'}`}></div>
            )}
          </div>
          <div className={`ml-4 flex flex-col justify-center h-4 cursor-default  ${currentStep === index ? 'font-semibold text-black' : 'text-gray-500'}`}>
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}
