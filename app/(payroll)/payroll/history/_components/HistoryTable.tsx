import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const historyTableData = [
    {
      id: 345,
      status: 'Processed',
      schedule: 'Regular Pay Cycle',
      date: 'Aug 16, 2023',
      amount: '$19,083.00',
      hour: '510.003',
      action: 'View Details'
    },
    {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
    },
    {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
      {
        id: 345,
        status: 'Processed',
        schedule: 'Regular Pay Cycle',
        date: 'Aug 16, 2023',
        amount: '$19,083.00',
        hour: '510.003',
        action: 'View Details'
      },
  ];

const HistoryTable = () => {

    return (
        <div className="min-w-full bg-white border border-gray-100 rounded-lg shadow-lg mt-10 mb-10">
            
            <table>
                <thead>
                    <tr className="text-gray-400 text-xs leading-normal border-b border-gray-200">
                        <th className="py-5 px-6 text-left w-[5%]">ID</th>
                        <th className="py-5 px-6 text-left w-[15%]">Status</th>
                        <th className="py-5 px-6 text-left w-[15%]">Schedule</th>
                        <th className="py-5 px-6 text-left w-[15%]">Period Date</th>
                        <th className="py-5 px-6 text-left w-[15%]">Hours</th>
                        <th className="py-5 px-6 text-left w-[10%]">Total</th>
                        <th className="py-5 px-6 text-center w-[10%]">Action</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                {historyTableData.map((history) => (
                    <tr
                    key={history.id}
                    className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                    >
                        <td className="py-5 px-6">{history.id}</td>
                        <td className="py-5 px-6">{history.status}</td>
                        <td className="py-5 px-6">{history.schedule}</td>
                        <td className="py-5 px-6">{history.date}</td>
                        <td className="py-5 px-6">{history.hour}</td>
                        <td className="py-5 px-6">{history.amount}</td>
                        <td className='py-5 px-6 text-center text-blue-500'>{history.action}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr className="border-t border-gray-200 bg-gray-50">
                        <td colSpan={7} className="py-3 px-6 text-right">
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

export default HistoryTable;