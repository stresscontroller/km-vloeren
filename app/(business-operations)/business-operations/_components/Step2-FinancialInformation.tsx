'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

import StepIndicator from '@/components/shared/StepIndicator';
import ActionButton from './ActionButton';

const Step2 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );
  const [selected] = useState<string | null>(quoteOption || null);
  const [isYes, setIsYes] = useState<boolean | null>(null);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <StepIndicator currentStep={2} totalSteps={6} />
          <p>FINANCIAL INFORMATION</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Your Financial Picture
          </h1>
          <p className="text-sm text-gray-500">
            To effectively manage your finances, let's gather a few more
            details. This helps us provide insights tailored to your financial
            goals.
          </p>
        </div>

        <form>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Monthly operating expenses</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">Enter operating expenses</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">
                Gross and net profit (if available)
              </label>
              <input
                type="text"
                placeholder="Enter gross and net profit"
                className="w-full h-11 p-2 border rounded text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Annual Revenue</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">Select..</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Payment methods accepted</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">e.g., credit, bank transfer, etc..</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <p className="block mb-4">Existing debts or loans</p>
            <div>
              <label className="inline-flex items-center mb-2 mr-12">
                <input
                  type="radio"
                  name="incorporated"
                  value="yes"
                  onChange={() => setIsYes(true)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="incorporated"
                  value="no"
                  onChange={() => setIsYes(false)}
                  className="mr-2"
                />
                No
              </label>
              <div className="md:w-1/2">
                <input
                  type="text"
                  placeholder="Please specify"
                  className="w-full pl-4 h-11 border rounded text-sm"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {isYes !== null && <div className="mb-4"></div>}
      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </>
  );
};

export default Step2;
