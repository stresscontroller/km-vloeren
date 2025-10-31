'use client';
import React from 'react';

import ExpensesTrackingChart from '../components/ExpensesTrackingChart';
import AccountingOverViewCard from '../components/AccountingOverViewCard';
import AccountStatisticChart from '../components/AccountStatisticChart';
import TransactionTable from '../components/TransactionTable';

const accountingCardsList = [
  {
    title: 'Income',
    amount: '$160k',
    percent: 20,
    date: 'vs previos 30 days',
  },
  {
    title: 'Cost of Goods Sold',
    amount: '$86k',
    percent: 0.1,
    date: 'vs previous 30 days',
  },
  {
    title: 'Expenses',
    amount: '$28k',
    percent: -50,
    date: 'vs previous 30 days',
  },
  {
    title: 'Net Profit',
    amount: '$182k',
    percent: 10,
    date: 'vs previous 30 days',
  },
  {
    title: 'Peding Payment',
    amount: '$60k',
    percent: 10,
    date: 'vs previous 30 days',
  },
];

const AccountingPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg bg-white flex flex-col gap-3 shadow-md p-10 w-full">
        <div>
          <h5 className="text-lg">Accounting</h5>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-wrap">
          {accountingCardsList.map((card) => (
            <div className="p-1">
              <AccountingOverViewCard key={card.title} card={card} />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row h-[350px] gap-5">
          <div className="w-full flex flex-col gap-5 border border-gray-300 rounded-lg p-5">
            <p className="font-semibold">Account Statistic</p>
            <AccountStatisticChart />
          </div>
          <div className="w-full flex flex-col gap-5 border border-gray-300 rounded-lg p-5">
            <p className="font-semibold">Expenses Tracking</p>
            <ExpensesTrackingChart />
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="p-4 min-w-full bg-white rounded-xl shadow overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold mt-3 mb-4 flex-grow">
              Transactions
            </p>
            <a href="" className="text-blue-500 font-semibold text-sm">
              View All
            </a>
          </div>
          <div className="overflow-x-auto">
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingPage;
