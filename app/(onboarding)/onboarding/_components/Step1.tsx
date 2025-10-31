'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import ActionButton from './ActionButton';
import StepIndicator from '@/components/shared/StepIndicator';

const Step1 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );

  const [isIncorporated, setIsIncorporated] = useState<boolean | null>(null);
  const [selected] = useState<string | null>(quoteOption || null);

  return (
    <>
      <div className="max-w-xl mx-auto p-4 md:p-8">
        <div className="text-center mb-10">
          <StepIndicator currentStep={1} totalSteps={5} />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Please provide some of your business information
          </h1>
        </div>

        <form>
          <div className="mb-4">
            <label className="block mb-2">What is your business name?</label>
            <input
              type="text"
              placeholder="ex: Your Business LLC"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">What does your business do?</label>
            <textarea
              placeholder="Tell about your business"
              className="w-full p-2 border rounded h-24"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Where is your business located?
            </label>
            <input
              type="text"
              placeholder="Please enter your business address"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Your business EIN?</label>
              <input
                type="text"
                placeholder="Please enter your business EIN"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Your annual revenue?</label>
              <select
                className="w-full h-11 p-2 border rounded bg-no-repeat bg-right"
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
          </div>

          <div className="mb-4">
            <p className="text-xl block mb-4">
              Is your business already incorporated?
            </p>
            <div>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="incorporated"
                  value="yes"
                  onChange={() => setIsIncorporated(true)}
                  className="mr-4"
                />
                Yes, we're already incorporated
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="incorporated"
                  value="no"
                  onChange={() => setIsIncorporated(false)}
                  className="mr-4"
                />
                No, we need help getting incorporated.
              </label>
            </div>
          </div>
        </form>
      </div>
      {isIncorporated !== null && <div className="mb-4"></div>}
      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </>
  );
};

export default Step1;
