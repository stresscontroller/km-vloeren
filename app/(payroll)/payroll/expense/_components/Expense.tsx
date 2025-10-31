'use client';

import ExpenseTable from './ExpenseTable';

const Expenses = () => {
    return (
        <div className="mt-6">
            <p className="text-lg font-semibold">Expenses Breakdown</p>
            <p className="text-xs text-gray-500">Pellentesque varius sit enim morbivorttitor molestie</p>
            <ExpenseTable />
            
        </div>
    );
};

export default Expenses;