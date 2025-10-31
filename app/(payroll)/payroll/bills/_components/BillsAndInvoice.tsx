'use client';
import { FaEllipsisVertical } from 'react-icons/fa6';
import BillsAndInvoiceTable from './BillsAndInvoiceTable';

const BillsAndInvoice = () => {
    return (
        <div className="mt-6">
            <p className="text-lg font-semibold">Bills & Invoices</p>
            <p className="text-xs text-gray-500">Pellentesque varius sit enim morbivorttitor molestie</p>

            <BillsAndInvoiceTable />
            
        </div>
    );
};

export default BillsAndInvoice;