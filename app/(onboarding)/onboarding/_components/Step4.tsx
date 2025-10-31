'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

import StepIndicator from '@/components/shared/StepIndicator';
import ActionButton from './ActionButton';
import { OnboardPriceCard } from './OnboardCard';

const Step4 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );
  const [isIncorporated] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<string | null>(quoteOption || null);

  const cardsList = [
    {
      title: 'Basic Plan',
      desc: 'Per month',
      price: '$45',
      subDesc: 'View Plan Features',
    },
    {
      title: 'Premium Plan',
      desc: 'Per month',
      price: '$99',
      subDesc: 'View Plan Features',
    },
    {
      title: 'Enterprise Plan',
      desc: 'Per month',
      price: '$199',
      subDesc: 'View Plan Features',
    },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="text-center mb-10">
          <StepIndicator currentStep={4} totalSteps={5} />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Select Pricing Plan
          </h1>
        </div>
        <form className="items-center">
          <div className="flex flex-col md:flex-row items-center gap-5">
            {cardsList.map((card) => (
              <OnboardPriceCard
                key={card.title}
                card={card}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>

          <div className="mb-4 mt-6 max-w-lg mx-auto">
            <label className="block mb-2">Email Address</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4 max-w-lg mx-auto">
            <label className="block mb-2">Confirm Email Address</label>
            <input
              type="text"
              placeholder="Confirm your email"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4 max-w-lg mx-auto">
            <label className="block mb-2">Password</label>
            <input
              type="text"
              placeholder="Please enter your password"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4 max-w-lg mx-auto">
            <label className="block mb-2">Confirm Password</label>
            <input
              type="text"
              placeholder="Confirm your password"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-8 max-w-lg mx-auto">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span>Accept Terms and Conditions</span>
            </label>
          </div>

          <div className="mb-4 max-w-lg mx-auto">
            <label className="block mb-2 text-gray-500 italic text-sm">
              Helping you to protect all your digital activity and data from
              unwanted party
            </label>
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

export default Step4;
