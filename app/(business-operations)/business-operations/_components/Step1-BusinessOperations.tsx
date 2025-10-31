'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import ActionButton from './ActionButton';
import StepIndicator from '@/components/shared/StepIndicator';

const Step1 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );

  const [selected] = useState<string | null>(quoteOption || null);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <StepIndicator currentStep={1} totalSteps={6} />
          <p>BUSINESS OPERATIONS</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Understanding Your Operations
          </h1>
          <p className="text-sm text-gray-500">
            Let's start with a few basics about your business operations so we
            can tailor our services to your needs
          </p>
        </div>

        <form>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Number of employees</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">Select number of employees</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Monthly payroll expenses</label>
              <input
                type="text"
                placeholder="Payroll expenses"
                className="w-full h-11 p-2 border rounded text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Primary business activities</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">Select business industry</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Business structure</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">e.g., LLC, S-Corp..</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Service providers you work with
            </label>
            <input
              type="text"
              placeholder="e.g., payroll processor, software providers"
              className="w-full pl-4 h-11 border rounded text-sm"
            />
          </div>
        </form>
      </div>

      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </>
  );
};

export default Step1;
