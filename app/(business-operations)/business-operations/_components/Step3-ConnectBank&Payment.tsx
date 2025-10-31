'use client';
import { useState } from 'react';
import StepIndicator from '@/components/shared/StepIndicator';
import { useAppSelector } from '@/lib/hooks';
import ActionButton from './ActionButton';
import 'react-datepicker/dist/react-datepicker.css';
import { GoArrowRight } from 'react-icons/go';

const Step3 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );

  const [selected] = useState<string | null>(quoteOption || null);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <StepIndicator currentStep={3} totalSteps={6} />
          <p>CONNECT BANK & PAYMENT ACCOUNT</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Securely Connect Your Accounts
          </h1>
          <p className="text-sm text-gray-500">
            Link your business bank and payment accounts to keep finance &
            transactions seamlessly organized. We use secure encryption for
            total piece of mind.
          </p>
        </div>

        <div>
          <p className="text-2xl mb-3">Verify your bank account instantly</p>
          <p className="text-sm mb-5 text-gray-500">
            Fusce parturient morbi ridiculus montes interdum nulla ullamcorper;
            velit phasellus. Dui sit hendrerit sem diam massa risus ornare
            quisque.
          </p>
          <div className="flex">
            <p className="text-sm font-semibold mr-2">Note: </p>
            <p className="text-sm text-gray-500 mb-3">
              Vivamus suscipit ultrices taciti ante nullam tristique venenatis
              dictum.
            </p>
          </div>
          <button
            className="p-2 pl-6 pr-6 rounded-lg text-sm flex items-center space-x-1 
                             bg-blue-500 text-white shadow-md shadow-blue-500 mb-10"
          >
            <span>Verify with Plaid</span>
            <GoArrowRight className="w-4 h-4 ml-1 font-semibold" />
          </button>

          <p className="text-gray-400 italic mb-10">Or</p>

          <p className="text-2xl mb-3">Enter bank account manually</p>
          <p className="text-sm mb-5 text-gray-500">
            Fusce parturient morbi ridiculus montes interdum nulla ullamcorper;
            velit phasellus. Dui sit hendrerit sem diam massa risus ornare
            quisque.
          </p>
        </div>
        <form>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Bank Name</label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="w-full h-11 p-2 border rounded text-sm"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Account Type</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">Select Account Type</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Checking Number</label>
              <input
                type="text"
                placeholder="Enter checking account number"
                className="w-full h-11 p-2 border rounded text-sm"
              />
            </div>
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Confirm Checking Number</label>
              <input
                type="text"
                placeholder="Re-enter checking account number"
                className="w-full h-11 p-2 border rounded text-sm"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
            <label className="block mb-2">Routing Number</label>
            <input
              type="text"
              placeholder="Enter routing number"
              className="w-full h-11 p-2 border rounded text-sm"
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

export default Step3;
