'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import StepIndicator from '@/components/shared/StepIndicator';
import { useAppSelector } from '@/lib/hooks';
import ActionButton from './ActionButton';
import 'react-datepicker/dist/react-datepicker.css';

const Step5 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );

  const [selected] = useState<string | null>(quoteOption || null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [, setIsYes] = useState<boolean | null>(null);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <StepIndicator currentStep={5} totalSteps={6} />
          <p>INSURANCE & LEGAL INFORMATION</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Insurance & Legal Setup
          </h1>
          <p className="text-sm text-gray-500">
            Let's ensure you are fully covered. Tell us about your insurance and
            legal details so we can provide guidence where needed.
          </p>
        </div>

        <form>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Insurance provider</label>
              <input
                type="text"
                placeholder="Enter federal EIN number"
                className="w-full h-11 p-2 border rounded text-sm"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Policy types</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">e.g., general liability, worker's...</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 relative mb-4 md:mb-0">
              <label className="block mb-2">Policy expiration date</label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                className="w-full p-2 border rounded text-sm h-11"
                placeholderText="DD / MM / YYYY"
              />
              <img
                src="/icon/date.svg"
                alt="Date Icon"
                className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/12 text-gray-400 mr-2"
              />
            </div>

            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Legal entity information</label>
              <select
                className="w-full h-11 pl-4 border rounded bg-no-repeat bg-right text-gray-400 text-sm"
                style={{
                  appearance: 'none',
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">e.g., franchise, affiliate, etc.</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <p className="block mb-4">Licenses or permits held</p>
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
      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </>
  );
};

export default Step5;
