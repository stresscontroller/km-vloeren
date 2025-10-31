import React from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';

interface Transaction {
  id: number;
  ticketNo: string;
  elitVenenate: string;
  date: string;
  status: string;
}

const trxTableData: Transaction[] = [
  {
    id: 1,
    ticketNo: 'INC-09830-082',
    elitVenenate: 'Tax & Compliance',
    date: 'January 10',
    status: 'Resolved',
  },
  {
    id: 2,
    ticketNo: 'INC-09830-082',
    elitVenenate: 'Tax & Compliance',
    date: 'January 8',
    status: 'In progress',
  },
  {
    id: 3,
    ticketNo: 'INC-09830-082',
    elitVenenate: 'Tax & Compliance',
    date: 'January 8',
    status: 'Resolved',
  },
  {
    id: 4,
    ticketNo: 'INC-09830-082',
    elitVenenate: 'Tax & Compliance',
    date: 'January 15',
    status: 'In progress',
  },
  {
    id: 5,
    ticketNo: 'INC-09830-082',
    elitVenenate: 'Tax & Compliance',
    date: 'January 10',
    status: 'Resolved',
  },
];

const TableHeader: React.FC = () => (
  <thead className="bg-gray-100 whitespace-nowrap">
    <tr>
      <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>TICKET REFERENCE NO.</span>
        </div>
      </th>
      <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        ELIT-VENENATE
      </th>
      <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        LOREM IPSUM
      </th>
      <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        LOREM IPSUM
      </th>
      <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        STATUS
      </th>
      <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        ACTIONS
      </th>
    </tr>
  </thead>
);

interface TableRowProps {
  trx: Transaction;
}

const TableRow: React.FC<TableRowProps> = ({ trx }) => (
  <tr
    key={trx.id}
    className="border-b border-gray-200 bg-white hover:bg-gray-100 whitespace-nowrap"
  >
    <td className="px-4 py-4 text-sm text-gray-800">
      <input type="checkbox" className="mr-2" />
      <span className="text-blue-500 font-semibold">{trx.ticketNo}</span>
    </td>
    <td className="px-4 py-4 text-sm text-gray-800">{trx.elitVenenate}</td>
    <td className="px-4 py-4 text-sm text-gray-800">{trx.date}</td>
    <td className="px-4 py-4 text-sm text-gray-800">{trx.date}</td>
    <td className="px-4 py-4 text-sm text-gray-800">
      <div className="flex gap-2">
        <p
          className={`rounded-full px-2 py-1 flex items-center ${trx.status === 'Resolved' ? 'bg-green-200' : 'bg-red-200'}`}
        >
          {trx.status}
        </p>
      </div>
    </td>
    <td className="text-blue-500">
      <div className="flex gap-2 items-center justify-center text-xl">
        <FaEllipsisVertical />
      </div>
    </td>
  </tr>
);

const TransactionTable: React.FC = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <TableHeader />
      <tbody>
        {trxTableData.map((trx) => (
          <TableRow key={trx.id} trx={trx} />
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionTable;
