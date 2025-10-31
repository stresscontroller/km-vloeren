'use client';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

import StepIndicator from '@/components/shared/StepIndicator';
import ActionButton from './ActionButton';
import { OnboardServiceCard } from './OnboardCard';

const Step2 = () => {
  const quoteOption = useAppSelector(
    (state) => state.onboarding.formData?.quote
  );
  const [isIncorporated] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<string | null>(quoteOption || null);

  const cardsList = [
    {
      title: 'Incorporation Services',
      desc: 'Start your business off right with our incorporation services. We will manage the paperwork while you focus on building your business. No fees outside of state filling fees.',
      icon: 'icon/cog.svg',
    },
    {
      title: 'Business Insurance',
      desc: 'Protect your business from unexpected risks with our comprehensive insurance options. Get peace of mind today.',
      icon: 'icon/shield-check.svg',
    },
    {
      title: 'Catch-Up Bookkeeping',
      desc: 'Bring your financial records up to date. Our bookkeeping experts will help you get organized and compliant',
      icon: 'icon/calendar-check.svg',
    },
  ];

  return (
    <>
      <div className="max-w-xl mx-auto p-4 md:p-8">
        <div className="text-center mb-10">
          <StepIndicator currentStep={2} totalSteps={5} />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            What additional services would you like?
          </h1>
        </div>

        <form className="flex flex-col items-center gap-5">
          {cardsList.map((card) => (
            <OnboardServiceCard
              key={card.title}
              card={card}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </form>
      </div>
      {isIncorporated !== null && <div className="mb-4"></div>}
      <div>
        <ActionButton formValues={{ quote: selected }} />
      </div>
    </>
  );
};

export default Step2;