import { SlExclamation } from "react-icons/sl";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const billsTableData = [
    {
      id: 10098,
      date: 'Aug 16, 2023',
      bill_to: 'Teresa Johnson',
      bill_from: 'Lorem Ipsum',
      amount: '$940.08',
      status: 'Opened'
    },
    {
        id: 10730,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Overdue'
      },
      {
        id: 10046,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Overdue'
      },
      {
        id: 10097,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Paid'
      },
      {
        id: 10018,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Opened'
      },
      {
        id: 10973,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Paid'
      },
      {
        id: 10870,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Paid'
      },
      {
        id: 10962,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Overdue'
      },
      {
        id: 10870,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Opened'
      },
      {
        id: 10962,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Opened'
      },
      {
        id: 10870,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Overdue'
      },
      {
        id: 10962,
        date: 'Aug 16, 2023',
        bill_to: 'Teresa Johnson',
        bill_from: 'Lorem Ipsum',
        amount: '$940.08',
        status: 'Paid'
      },
  ];

const BillsAndInvoiceTable = () => {

    const getStatusColor = (status: string) => {
        switch (status) {
          case 'Opened':
            return 'bg-purple-400';
          case 'Overdue':
            return 'bg-orange-400';
          case 'Paid':
            return 'bg-green-400';
        }
      };

    return (
        <div className="min-w-full bg-white border border-neutral rounded-lg shadow-lg mt-10 mb-10">
                <table>
                    <thead>
                        <tr className="text-xs text-gray-400 leading-normal border-b border-gray-200">
                            <th className="py-5 px-6 text-left w-[8%]">No.</th>
                            <th className="py-5 px-6 text-left w-[10%]">Date</th>
                            <th className="py-5 px-6 text-left w-[15%]">Bill To</th>
                            <th className="py-5 px-6 text-left w-[15%]">Bill From</th>
                            <th className="py-5 px-6 text-left w-[15%]">Total Amount</th>
                            <th className="py-5 px-6 text-left w-[10%]">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                    {billsTableData.map((bill) => (
                        <tr
                        key={bill.id}
                        className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                        >
                            <td className="py-5 px-6">
                                {bill.id}
                            </td>

                            <td className="py-5 px-6">
                                {bill.date}
                            </td>


                            <td className="py-5 px-6 flex flex-row items-center">
                                <img
                                    src="/images/mattdawson-profile-09.png"
                                    alt="email"
                                    className="w-7 h-7 mr-2 rounded-2xl"
                                />
                                {bill.bill_to}
                            </td>

                            <td className="py-5 px-6">
                                {bill.bill_from}
                            </td>

                            <td className='py-5 px-6'>{bill.amount}</td>

                            <td>
                                <div className="flex text-center text-white">
                                    <p
                                        className={`w-[7rem] h-auto rounded-full p-2 flex justify-center items-center
                                            ${getStatusColor(bill.status)}`}
                                        >
                                        <span className="mr-2">{bill.status}</span>
                                        <SlExclamation />
                                    </p>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t border-gray-200 bg-gray-50">
                            <td colSpan={6} className="py-3 px-6 text-right">
                                <div className="flex justify-end items-center">
                                    <span className="mr-2 text-xs font-semibold">Per Page:</span>
                                    <select
                                        className="w-[3rem] text-xs text-right p-2 rounded bg-no-repeat bg-right"
                                        style={{
                                        appearance: 'none',
                                        backgroundImage:
                                            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -5 33 33" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>\')',
                                        backgroundPosition: 'right 10px center',
                                        }}
                                    >
                                        <option value="10">1</option>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    <RxDoubleArrowLeft className='mr-1 ml-4'/>

                                    <IoIosArrowBack className='mr-1 ml-4 text-blue-500'/>

                                    <p className='ml-4 text-sm'>40</p>

                                    <IoIosArrowForward className='mr-1 ml-4 text-blue-500'/>
                                    
                                    <RxDoubleArrowRight className='mr-1 ml-4'/>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

    )
}

export default BillsAndInvoiceTable;