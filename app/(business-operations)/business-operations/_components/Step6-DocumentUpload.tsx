'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import ActionButton from './ActionButton';
import StepIndicator from '@/components/shared/StepIndicator';

const Step6 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );

  const [selected] = useState<string | null>(quoteOption || null);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <StepIndicator currentStep={6} totalSteps={6} />
          <p>DOCUMENT UPLOAD</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Upload Essential Documents
          </h1>
          <p className="text-sm text-gray-500">
            Upload any relevent documents securely, such as insurance
            certificates, tax forms, payroll records, and licenses. This allow
            us to keep everything centralized and accessible.
          </p>
        </div>

        <form>
          <div className="mb-4">
            <label className="block mb-2">Insurance certificates</label>
            <div className="flex items-center border rounded-lg p-3 w-full shadow-sm">
              <img
                src="/images/check.png"
                alt="File Thumbnail"
                className="w-10 h-10 mr-3 rounded"
              />

              <div className="flex-grow">
                <p className="text-sm font-semibold text-black">
                  my insurance certificates.pdf
                </p>
                <p className="text-xs text-gray-500">500kb</p>
              </div>

              <button
                className="ml-4 text-gray-500 hover:text-gray-700 rounded-xl bg-gray-100 shadow-md border border-gray-500 p-0.5"
                onClick={(e) => e.preventDefault()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Tax documentation</label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="latest tax return, filings, etc."
                className="w-full pl-4 pr-20 h-14 border rounded text-sm"
              />
              <button
                className="absolute  border border-gray-400 right-2 top-1/2 transform mr-2
                                  -translate-y-1/2 text-sm bg-gray-100 px-3 py-1 rounded-lg shadow-md shadow-gray-200"
              >
                Upload
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Payroll records</label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Upload payroll records"
                className="w-full pl-4 pr-20 h-14 border rounded text-sm"
              />
              <button
                className="absolute  border border-gray-400 right-2 top-1/2 transform mr-2
                                  -translate-y-1/2 text-sm bg-gray-100 px-3 py-1 rounded-lg shadow-md shadow-gray-200"
              >
                Upload
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Liceses and permits</label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Upload licenses and permits"
                className="w-full pl-4 pr-20 h-14 border rounded text-sm"
              />
              <button
                className="absolute  border border-gray-400 right-2 top-1/2 transform mr-2
                                  -translate-y-1/2 text-sm bg-gray-100 px-3 py-1 rounded-lg shadow-md shadow-gray-200"
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </>
  );
};

export default Step6;
