import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const expenseTableData = [
    {
      id: 1,
      category: 'Employee Costs',
      type: 'Employee Benefits',
      estimates: '5028.01',
      amount: '$59.92',
      act_perct: '83.03%',
      action: 'View Details'
    },
    {
        id: 2,
        category: 'Employee Costs',
        type: 'Employee Benefits',
        estimates: '5028.01',
        amount: '$69.92',
        act_perct: '53.03%',
        action: 'View Details'
    },
    {
        id: 3,
        category: 'Employee Costs',
        type: 'Employee Benefits',
        estimates: '5028.01',
        amount: '$59.92',
        act_perct: '83.03%',
        action: 'View Details'
    },
    {
        id: 4,
        category: 'Vehical Maintenance',
        type: 'Bridge Patrol',
        estimates: '5028.01',
        amount: '$59.92',
        act_perct: '83.03%',
        action: 'View Details'
      },
      {
          id: 5,
          category: 'Office Cost',
          type: 'Security Charges',
          estimates: '5028.01',
          amount: '$59.92',
          act_perct: '83.03%',
          action: 'View Details'
      },
      {
          id: 6,
          category: 'Office Cost',
          type: 'Security Charges',
          estimates: '5028.01',
          amount: '$59.92',
          act_perct: '83.03%',
          action: 'View Details'
      },
      {
        id: 7,
        category: 'Office Cost',
        type: 'Office Leases',
        estimates: '5028.01',
        amount: '$59.92',
        act_perct: '83.03%',
        action: 'View Details'
      },
      {
          id: 8,
          category: 'Vehical Maintenance',
          type: 'Regular Pay Cycle',
          estimates: '5028.01',
          amount: '$59.92',
          act_perct: '83.03%',
          action: 'View Details'
      },
      {
          id: 9,
          category: 'Employee Costs',
          type: 'Employee Benefits',
          estimates: '5028.01',
          amount: '$59.92',
          act_perct: '83.03%',
          action: 'View Details'
      },
      {
        id: 10,
        category: 'Vehical Maintenance',
        type: 'Bridge Patrol',
        estimates: '5028.01',
        amount: '$59.92',
        act_perct: '83.03%',
        action: 'View Details'
      },
      {
          id: 11,
          category: 'Vehical Maintenance',
          type: 'Bridge Patrol',
          estimates: '5028.01',
          amount: '$59.92',
          act_perct: '83.03%',
          action: 'View Details'
      },
      {
          id: 12,
          category: 'Office Costs',
          type: 'Employee Benefits',
          estimates: '5028.01',
          amount: '$59.92',
          act_perct: '83.03%',
          action: 'View Details'
      },
  ];

const ExpenseTable = () => {

    return (
        <div className="min-w-full bg-white rounded-xl border border-gray-100 shadow-lg mt-10 mb-10">
                <table className="rounded-xl border border-gray-100">
                    <thead>
                        <tr className="text-gray-400 text-xs leading-normal border-b">
                            <th className="py-5 px-6 text-left w-[3%]">No</th>
                            <th className="py-5 px-6 text-left w-[10%]">Category</th>
                            <th className="py-5 px-6 text-left w-[13%]">Type</th>
                            <th className="py-5 px-6 text-left w-[10%]">Estimates</th>
                            <th className="py-5 px-6 text-left w-[10%]">Amount</th>
                            <th className="py-5 px-6 text-left w-[10%]">Act / Est %</th>
                            <th className="py-5 px-6 text-center w-[10%]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                    {expenseTableData.map((expense) => (
                        <tr
                        key={expense.id}
                        className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                        >
                            <td className="py-5 px-6">{expense.id}</td>
                            <td className="py-5 px-6">{expense.category}</td>
                            <td className="py-5 px-6">{expense.type}</td>
                            <td className="py-5 px-6">{expense.estimates}</td>
                            <td className="py-5 px-6">{expense.amount}</td>
                            <td className="py-5 px-6">{expense.act_perct}</td>
                            <td className='py-5 px-6 text-center text-blue-500'>{expense.action}</td>
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

export default ExpenseTable;