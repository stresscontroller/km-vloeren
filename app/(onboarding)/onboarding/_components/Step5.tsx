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
  const [openIndex, setOpenIndex] = useState<number | null>(null); // To track which accordion is open

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked accordion
  };

  const [selected] = useState<string | null>(quoteOption || null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const accordions = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Maleda auctor vitae non venenatis? Lorem ipsum dolor sit amet consectetur. Adipiscing habitant mauris convallis potenti hac mollis interdum bibendum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Maleda auctor vitae non venenatis? Lorem ipsum dolor sit amet consectetur. Adipiscing habitant mauris convallis potenti hac mollis interdum bibendum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Maleda auctor vitae non venenatis? Lorem ipsum dolor sit amet consectetur. Adipiscing habitant mauris convallis potenti hac mollis interdum bibendum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Maleda auctor vitae non venenatis? Lorem ipsum dolor sit amet consectetur. Adipiscing habitant mauris convallis potenti hac mollis interdum bibendum.',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Maleda auctor vitae non venenatis? Lorem ipsum dolor sit amet consectetur. Adipiscing habitant mauris convallis potenti hac mollis interdum bibendum.',
    },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="text-center mb-10">
          <StepIndicator currentStep={5} totalSteps={5} />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Completed Payment
          </h1>
        </div>

        <form>
          <div className="flex flex-col md:flex-row justify-between mb-10">
            {/* Accordion Section */}
            <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
              {accordions.map((accordion, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-md mb-3"
                >
                  {/* Accordion Header */}
                  <div
                    onClick={() => handleToggle(index)}
                    className="cursor-pointer flex justify-between items-center p-4 bg-gray-100 rounded-md"
                  >
                    <span>{accordion.title}</span>
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </div>

                  {/* Accordion Content */}
                  {openIndex === index && (
                    <div className="p-4 bg-gray-100">
                      <p>{accordion.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 md:pl-6 bg-gray-900 p-6 rounded-lg text-white">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-lg">Your Plan</div>
                  <div className="text-right">
                    <div className="justify-between text-left">
                      <div>
                        <span className="text-sm">Premium Plan</span>
                      </div>
                      <span className="text-xl font-bold">$99</span>
                      <span className="text-sm text-gray-400">
                        {' '}
                        / per month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-700 mb-6" />

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
                />
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                <div className="relative w-full md:w-1/2">
                  <label className="block text-gray-400 mb-2">Exp. Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
                    placeholderText="MM / YYYY"
                  />
                  <img
                    src="/icon/date.svg"
                    alt="Date Icon"
                    className="w-7 h-7 absolute right-2 top-1/2 transform -translate-y-1/10 text-gray-400"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-400 mb-2">
                    Security Code
                  </label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
                  />
                </div>
              </div>

              <div>
                <button className="w-full bg-white text-black p-3 font-bold rounded">
                  Confirm Payment
                </button>
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
