'use client';
import React from 'react';

import ExperianChart from './ExperianChart';
import ExperianPieChart from './ExperianPieChart';
import ExperianCard from './ExperianCard';

const infoCardData = [
  {
    id: 1,
    title: 'Score Improvements',
    subtitle1: 'Wednesday, Match 29',
    subdescription1: 'Egestas ac tortor tristique quis',
    subtitle2: 'Friday, Match 31',
    subdescription2: 'Next employee payday',
    subtitle3: 'Tuesday, April 25',
    subdescription3: 'Payroll on AutoDebt',
  },
  {
    id: 2,
    title: 'What is hurting my score?',
    subtitle1: 'Wednesday, Match 29',
    subdescription1: 'Egestas ac tortor tristique quis',
    subtitle2: 'Friday, Match 31',
    subdescription2: 'Next employee payday',
    subtitle3: 'Tuesday, April 25',
    subdescription3: 'Payroll on AutoDebt',
  },
  {
    id: 3,
    title: 'Next Score Report',
    subtitle1: 'Wednesday, Match 29',
    subdescription1: 'Egestas ac tortor tristique quis',
    subtitle2: 'Friday, Match 31',
    subdescription2: 'Next employee payday',
    subtitle3: 'Tuesday, April 25',
    subdescription3: 'Payroll on AutoDebt',
  },
];

const Experian = () => {
  return (
    <div className="flex flex-col bg-white text-gray-700 text-sm">
      <div className="flex gap-4 ">
        <div className="w-6/12 flex gap-4">
          <div className="w-5/12 bg-gray-100 p-8 rounded-xl flex flex-col gap-4">
            <p>
              Aut <span className="text-black font-semibold">FICO</span> viverra
              pretium nec euismod ut at umcorper
            </p>
            <p className="font-semibold text-4xl text-yellow-500">Good</p>
            <p className="mt-6">
              Donec donec mollis id purus in integer sed. Fusce urna sed vellu
              imperdiet sodales dui. Vitae enim purus dignissim tortor ultrices
              facilisi viverra massa scelerisque lorem.
            </p>
          </div>
          <div className="w-7/12 bg-gray-100 p-8 rounded-xl flex flex-col gap-5">
            <div>
              <ExperianPieChart />
            </div>
            <p>
              Velit sed diam pulvinar at auctor pellentesq sem vulputate.
              Vestibulum aclectus vellum maecen gravida vestibulum amet lorem.
            </p>
          </div>
        </div>
        <div className="w-6/12 border border-gray-300 rounded-xl p-3 ">
          <ExperianChart />
        </div>
      </div>
      <div className='mt-5'>
        <p className='font-semibold text-xl text-black mb-4'>Additional Information</p>
        <div className="flex flex-wrap space-x-4">
          {infoCardData.map((card, index) => (
            <ExperianCard
              key={index}
              id={1}
              title={card.title}
              subtitle1={card.subtitle1}
              subdescription1={card.subdescription1}
              subtitle2={card.subtitle2}
              subdescription2={card.subdescription2}
              subtitle3={card.subtitle3}
              subdescription3={card.subdescription3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experian;
