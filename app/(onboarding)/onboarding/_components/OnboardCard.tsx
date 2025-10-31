import React, { Dispatch, SetStateAction } from 'react';
import { Card, CardContent, CardHeader } from '../../../../components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type OnboardCardProps = {
  card: {
    icon?: string;
    title: string;
    desc: string;
    price?: string;
    subDesc?: string;
  };
  selected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
};

const OnboardServiceCard = ({
  card,
  selected,
  setSelected,
}: OnboardCardProps) => {
  return (
    <Card
      className={cn(
        'w-full md:w-[43rem] flex flex-col md:flex-row shrink-0 transition-colors duration-500 cursor-pointer p-5 ',
        selected === card.title
          ? 'border-2 border-[#5297FF] bg-[#DCEAFE] shadow-xl shadow-blue-100'
          : 'border-neutral bg-gray-100'
      )}
      onClick={() => setSelected(card.title)}
    >
      <CardHeader className="p-5 space-y-3">
        <div
          className={cn(
            'w-20 h-20 p-5 rounded-full border border-gray-200 transition-colors duration-500 ',
            selected === card.title ? 'bg-[#5297FF] text-white' : 'bg-white'
          )}
        >
          <Image src={card.icon ?? ''} width={100} height={100} alt="icon" />
        </div>
      </CardHeader>
      <div>
        <p className="font-semibold text-xl">{card.title}</p>
        <CardContent className="mt-3 text-base">{card.desc}</CardContent>
      </div>
    </Card>
  );
};

const OnboardPriceCard = ({
  card,
  selected,
  setSelected,
}: OnboardCardProps) => {
  return (
    <Card
      className={cn(
        'w-full md:w-[20rem] flex flex-col shrink-0 transition-colors duration-500 cursor-pointer p-3',
        selected === card.title
          ? 'border-2 border-[#5297FF] bg-[#DCEAFE] shadow-xl shadow-blue-100'
          : 'border-neutral'
      )}
      onClick={() => setSelected(card.title)}
    >
      <div className="flex items-center justify-between">
        <input
          type="radio"
          name="pricingPlan"
          checked={selected === card.title}
          onChange={() => setSelected(card.title)}
          className="form-radio h-5 w-5 text-blue-600"
        />
      </div>
      <div className="text-center">
        <p className="text-xl mb-5">{card.title}</p>
        <CardContent className="text-6xl font-semibold mb-0">
          {card.price}
        </CardContent>
        <CardContent className="text-gray-500">{card.desc}</CardContent>
        <CardContent className="italic underline text-sm">
          {card.subDesc}
        </CardContent>
      </div>
    </Card>
  );
};

export { OnboardServiceCard, OnboardPriceCard };