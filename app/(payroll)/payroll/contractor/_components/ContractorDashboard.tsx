import { SlPencil } from "react-icons/sl";

const ContractorDashboard = () => {

    return (
        <div>
            <div className="flex justify-between bg-blue-900 px-6 py-4 rounded-t-lg">  
                <div>
                    <p className="text-xs text-gray-400">Employees</p>
                    <p className="text-md text-white">120</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Status</p>
                    <p className="text-md text-white">Contractors</p>
                </div>  
                <div>
                    <p className="text-xs text-gray-400">Earnings</p>
                    <p className="text-md text-white">$120M</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Taxes</p>
                    <p className="text-md text-white">$600K</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Gross</p>
                    <p className="text-md text-white">$150M</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Total Payments</p>
                    <p className="text-md text-white">372</p>
                </div> 
            </div>

            <div className="flex border border-gray-150">

                <div className="w-1/5 bg-gray-50 border-r">
                    <a href="#" className="block py-7 text-center border-b text-xs underline text-blue-500 hover:bg-blue-50">View All Employees</a>
                    <ul>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white bg-blue-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Annette Black</p>
                            <p className="text-xs text-gray-600">Front End Developer</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                        <li className="py-4 px-4 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-b">
                            <img src="/images/mattdawson-profile-09.png" alt="Employee" className="rounded-full w-12 h-12" />
                            <div className="ml-3">
                            <p className="text-sm font-semibold">Ralph Edwards</p>
                            <p className="text-xs text-gray-600">Marketing Coordinator</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="w-4/5">
                    <div className="flex justify-between items-center mb-6 bg-gray-200 p-4 ">
                        <div>
                            <h2 className="text-md font-semibold">Annette Black</h2>
                            <p className="text-xs text-gray-600">Front End Developer</p>
                        </div>
                        <div>
                            <h2 className="text-xs text-gray-400">satus</h2>
                            <p className="text-xs">Contractor</p>
                        </div>
                        <div>
                            <h2 className="text-xs text-gray-400">Contractor ID</h2>
                            <p className="text-xs">02-083010</p>
                        </div>
                        <div>
                            <h2 className="text-xs text-gray-400">Email</h2>
                            <p className="text-xs">annette.cblk@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="text-xs text-gray-400">Contact</h2>
                            <p className="text-xs">+1 (888) 770-6543 (ext. 9732)</p>
                        </div>
                        
                    </div>

                    <div className="p-3 px-48">
                        <div className="flex justify-between -mr-36">
                            <h3 className="text-md mb-2">General</h3>
                            <div className="flex">
                                <SlPencil className='text-sm mx-1 text-blue-500' />
                                <span className="text-xs text-blue-500">Edit</span>
                            </div>
                        </div>
                        
                        <table className="text-xs w-[50%]">
                            <tr>
                                <td className="text-gray-500 py-2">Monthly Salary</td>
                                <td className="font-semibold">$4,800.00</td>
                            </tr>

                            <tr>
                                <td className="text-gray-500 py-2">Work Week Hours</td>
                                <td className="font-semibold">40
                                    <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full">Hrs</span>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-gray-500 py-2">Manager</td>
                                <td className="font-semibold">Darrell Stewart</td>
                            </tr>

                            <tr>
                                <td className="text-gray-500 py-2">Employe Since</td>
                                <td className="font-semibold">August 20, 2022</td>
                            </tr>
                        </table>
                    </div>

                    <hr className="ml-4 mr-4"></hr>

                    <div className="p-6 px-48">
                        <div className="flex justify-between -mr-36">
                            <h3 className="text-md mb-2">Miscellaneous</h3>
                            <div className="flex">
                                <SlPencil className='text-sm mx-1 text-blue-500' />
                                <span className="text-xs text-blue-500">Edit</span>
                            </div>
                        </div>

                        <table className="text-xs w-[50%]">
                            <tr>
                                <td className="text-gray-500 py-2">Overtime</td>
                                <td className="font-semibold">40
                                    <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full">Hrs</span>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-gray-500 py-2">Deductions</td>
                                <td className="font-semibold">22
                                    <span className="ml-2 px-2 py-1 bg-gray-200 rounded-full">Days</span>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <hr className="ml-4 mr-4"></hr>

                    <div className="p-6 px-48">
                        <div className="flex justify-between -mr-36">
                            <h3 className="text-md mb-2">Tax</h3>
                            <div className="flex">
                                <SlPencil className='text-sm mx-1 text-blue-500' />
                                <span className="text-xs text-blue-500">Edit</span>
                            </div>
                        </div>

                        <table className="text-xs w-[50%]">
                            <tr>
                                <td className="text-gray-500 py-1">VAT</td>
                                <td className="font-semibold">10%</td>
                            </tr>

                            <tr>
                                <td className="text-gray-500 py-1">PND</td>
                                <td className="font-semibold">10%</td>
                            </tr>
                        </table>
                    </div>

                    <hr className="ml-4 mr-4"></hr>

                    <div className="p-6 px-48">
                        <div className="flex justify-between -mr-36">
                            <h3 className="text-md mb-2">Earnings</h3>
                            <div className="flex">
                                <SlPencil className='text-sm mx-1 text-blue-500' />
                                <span className="text-xs text-blue-500">Edit</span>
                            </div>
                        </div>
                        
                        <table className="text-xs w-[50%]">
                            <tr>
                                <td className="text-gray-500 py-1">Bonus</td>
                                <td className="font-semibold">10%</td>
                            </tr>

                            <tr>
                                <td className="text-gray-500 py-1">Other</td>
                                <td className="font-semibold">N/A</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractorDashboard;