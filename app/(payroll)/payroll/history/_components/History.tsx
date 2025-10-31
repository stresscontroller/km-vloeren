'use client';

import HistoryTable from './HistoryTable';

const History = () => {
    return (
        <div className="mt-6">
            <p className="text-lg font-semibold">Payroll History</p>
            <p className="text-xs text-gray-500">Pellentesque varius sit enim morbivorttitor molestie</p>
            <HistoryTable />
            
        </div>
    );
};

export default History;