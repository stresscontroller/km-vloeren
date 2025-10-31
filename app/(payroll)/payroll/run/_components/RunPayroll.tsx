'use client';
import { FaEllipsisVertical } from 'react-icons/fa6';
import EmployeePayrollTable from './EmployeePayrollTable';

const RunPayroll = () => {
    return (
        <div className="mt-6">
            <p className="text-lg">Run Payroll</p>
            <p className="text-xs text-gray-500">Pellentesque varius sit enim morbivorttitor molestie</p>

            <div className="h-auto w-[25rem] mt-10 border border-neutral shadow-gray-150 shadow-xl rounded-lg bg-white">
                
                    <p className="text-lg font-semibold mt-3 ml-6 mb-2 flex-grow">Up Next</p>
                <hr className="ml-6 mr-6 mb-4"/>

                <div className='flex justify-between'>
                    <div className="h-auto w-[9rem] p-3 rounded-3xl bg-gray-200 ml-6 mb-4">
                        <p className="text-xs ml-2 flex flex-row">Due tomorrow
                        <img
                            src="/icon/errorCircle.svg"
                            alt="email"
                            className="w-4 h-4 ml-1"
                        />
                        </p>
                    </div>
                    <FaEllipsisVertical className="text-grey text-md mb-2 mr-6 mt-2" />
                </div>
                

                <p className="text-sm font-semibold ml-6">Regular</p>
                <p className="text-xs text-gray-500 ml-6 mb-4">Regular Payroll</p>

                <div className="flex flex-row ml-6 mb-6">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500">Pay Period</p>
                        <p className="text-xs font-semibold">January 1 - January 15</p>
                    </div>

                    <div className="flex flex-col ml-12">
                        <p className="text-xs text-gray-500">Pay Day</p>
                        <p className="text-xs font-semibold">January 15 2025</p>
                    </div>
                </div>

                <button className="h-auto w-[10rem] p-2 rounded-lg bg-blue-400 ml-6 text-white text-sm mb-6">Run Payroll</button>
            </div>
            <EmployeePayrollTable />
            
        </div>
    );
};

export default RunPayroll;