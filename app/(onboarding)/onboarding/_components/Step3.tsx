'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import StepIndicator from '@/components/shared/StepIndicator';
import { useAppSelector } from '@/lib/hooks';
import ActionButton from './ActionButton';
import 'react-datepicker/dist/react-datepicker.css';

const Step3 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );

  const [selected] = useState<string | null>(quoteOption || null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-4 md:p-8">
        <div className="text-center mb-10">
          <StepIndicator currentStep={3} totalSteps={5} />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Tell us about you!
          </h1>
        </div>

        <form>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-full md:w-1/2 md:ml-2">
              <label className="block mb-2">Business Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 md:mr-2 relative mb-4 md:mb-0">
              <label className="block mb-2">Date of Birth</label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                className="w-full p-2 border rounded"
                placeholderText="MM / DD / YYYY"
              />
              <img
                src="/icon/date.svg"
                alt="Date Icon"
                className="w-7 h-7 absolute right-2 top-1/2 transform -translate-y-1/10 text-gray-400"
              />
            </div>

            <div className="w-full md:w-1/2 md:ml-2 relative">
              <label htmlFor="contactNo" className="block mb-2">
                Contact No
              </label>
              <div className="flex items-center" style={{ overflow: 'hidden' }}>
                <select
                  className="w-20 p-2 border rounded"
                  style={{ appearance: 'none' }}
                  id="countryCode"
                >
                  <option value="+1">🇺🇸 +1 </option>
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input
                  type="text"
                  id="contactNo"
                  placeholder="000-000-0000"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Your Address</label>
            <input
              type="text"
              placeholder="Please enter your address"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Your Company website</label>
            <input
              type="text"
              placeholder="Ex: www.yourcompany.com"
              className="w-full p-2 border rounded"
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
