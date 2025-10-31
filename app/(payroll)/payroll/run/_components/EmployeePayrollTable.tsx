import { FaEllipsisVertical } from 'react-icons/fa6';
import React, { useState } from 'react';
import { SlExclamation } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";
import { BiCopy } from "react-icons/bi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";
import { MdReportGmailerrorred } from "react-icons/md";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";

const employeeTableData = [
    {
      id: 1,
      name: 'Arendt, Hannah',
      payPeriod: 'January 1 - January 15',
      payday: 'January 10',
      action: 'Run Payroll',
      due: 'Due 2 days'
    },
    {
      id: 2,
      name: 'Baker, Shannon',
      payPeriod: 'January 1 - January 15',
      payday: 'January 8',
      action: 'Run Payroll',
      due: 'Past Due',
    },
    {
      id: 3,
      name: 'Brown, Nero',
      payPeriod: 'January 1 - January 15',
      payday: 'January 8',
      action: 'Run Payroll',
      due: 'Past Due',
    },
    {
      id: 4,
      name: 'Deville, Florentine',
      payPeriod: 'January 1 - January 15',
      payday: 'January 15',
      action: 'Run Payroll',
      due: 'Due 7 days',
    },
    {
        id: 1,
        name: 'Arendt, Hannah',
        payPeriod: 'January 1 - January 15',
        payday: 'January 10',
        action: 'Run Payroll',
        due: 'Due 2 days'
      },
      {
        id: 2,
        name: 'Baker, Shannon',
        payPeriod: 'January 1 - January 15',
        payday: 'January 8',
        action: 'Run Payroll',
        due: 'Past Due',
      },
      {
        id: 3,
        name: 'Brown, Nero',
        payPeriod: 'January 1 - January 15',
        payday: 'January 8',
        action: 'Run Payroll',
        due: 'Past Due',
      },
      {
        id: 4,
        name: 'Deville, Florentine',
        payPeriod: 'January 1 - January 15',
        payday: 'January 15',
        action: 'Run Payroll',
        due: 'Due 7 days',
      },
  ];

const EmployeePayrollTable = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleEdit = () => {
        setEdit(!edit);
        setIsOpen(false);
    };

    const getStatusColor = (due: string) => {
        if (due === 'Past Due') {
            return 'bg-red-400'; 
        }
        
        if (due.startsWith('Due')) {
            return 'bg-gray-300';
        }
    };

    return (
        <div className="p-4 min-w-full bg-white border border-neutral rounded-lg shadow-lg mt-10 mb-10">

                <div className='flex justify-between'>
                    <p className="text-lg font-semibold mt-3 ml-6 mb-4 flex-grow">Employees on payroll</p>
                    <FaEllipsisVertical 
                        className="text-grey text-md mt-4 mb-2 mr-6 cursor-pointer"
                        onClick={toggleMenu}
                    />
                    {
                        isOpen && (
                            <div className=' text-xs absolute bottom-64 right-6 w-36 bg-white text-blue-500 border border-gray-300 rounded shadow-lg mr-7'>
                                <ul className='py-1 mt-3 mb-2'>
                                    <li 
                                        className='px-4 py-1hover:bg-gray-100 cursor-pointer flex'
                                        onClick={() => toggleEdit()}>
                                            <SlPencil className="text-xs mr-3 mx-1 text-black" />
                                            Edit
                                    </li>
                                    <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer flex'>
                                        <BiCopy className='text-xs mr-3 mx-1 text-black' />
                                        Copy</li>
                                    <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer flex'>
                                        <FaRegShareFromSquare className='text-xs mr-3 mx-1 text-black' />
                                        Share</li>
                                    <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer flex'>
                                        <LuDelete className='text-xs mr-3 mx-1 text-black' />
                                        Delete</li>
                                    <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer flex'>
                                        <MdReportGmailerrorred className='text-xs mr-3 mx-1 text-black' />
                                        Report</li>
                                </ul>
                                <div className='absolute top-[100%] right-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white'></div>
                            </div>
                        )
                    }
                </div>
                <table>
                    <thead>
                        <tr className="text-gray-600 text-xs bg-gray-50 leading-normal border-b border-gray-200">
                            {edit && 
                                <th className="py-3 px-3 text-left w-[2%]"></th>
                            }
                            <th className={`py-3 text-left w-[10%] ${edit ? 'px-3' : 'px-14'}`}>
                                <div className="flex items-center">
                                    <LuArrowUpDown className="text-sm mx-1" />
                                    <span>Employee</span>
                                </div>
                            </th>
                            <th className="py-3 px-12 text-left w-[10%]">Pay Period</th>
                            <th className="py-3 px-6 text-left w-[10%]">
                                <div className="flex items-center">
                                    <LuArrowUpDown className="text-sm mx-1" />
                                    <span>Pay Day</span>
                                </div>
                            </th>
                            <th className="py-3 px-6 text-center w-[10%]"></th>
                            <th className="py-3 px-6 text-center w-[10%]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                    {employeeTableData.map((employee) => (
                        <tr
                        key={employee.id}
                        className="border-b border-gray-200 hover:bg-gray-100 w-[98%]"
                        >
                            {edit && 
                                <td className="py-3 px-3">
                                    <input type='checkbox' className='mr-2'/>
                                </td>
                            }
                            <td className={`py-3 ${edit ? 'px-3' : 'px-14'}`}>
                                <span>{employee.name}</span>
                            </td>
                            <td className="py-3 px-6">
                                <div className="flex items-center">
                                    <SlPencil className="text-sm mx-1 text-blue-500" />
                                    <span>{employee.payPeriod}</span>  
                                </div>
                            </td>
                            <td className="py-3 px-6">
                                <div className="flex items-center">
                                    <SlPencil className="text-sm mx-1 text-blue-500" /> 
                                    <span>{employee.payday}</span> 
                                </div>
                            </td>
                            <td>
                                <div className="flex gap-2 items-center">
                                    <p
                                        className={`inline-block w-[8rem] h-auto rounded-full p-2 text-center flex items-center justify-center 
                                            ${getStatusColor(employee.due)} 
                                            ${getStatusColor(employee.due) === 'bg-red-400' ? 'text-white' : 'text-black'}`}
                                        >
                                        <span className="mr-1">{employee.due}</span>
                                        <SlExclamation />
                                    </p>
                                </div>
                            </td>
                            <td className='py-3 px-6 text-center text-blue-500'>{employee.action}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr className="border-t border-gray-200 bg-gray-50">
                            <td colSpan={5} className="py-3 px-6 text-right">
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

export default EmployeePayrollTable;