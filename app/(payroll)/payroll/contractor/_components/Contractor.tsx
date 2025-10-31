'use client';
import { VscFilePdf } from 'react-icons/vsc';
import { SlPrinter } from "react-icons/sl";

import ContractorDashboard from './ContractorDashboard';

const Contractors = () => {
    return (
        <div className="mt-6">
            <p className="text-lg font-semibold">Contractors</p>
            <p className="text-xs text-gray-500">Pellentesque varius sit enim morbivorttitor molestie</p>

            <div className="p-4 min-w-full bg-white rounded-lg border border-gray-50 shadow-lg mt-10 mb-10">
                <div className='flex justify-between mr-2'>
                    <div className="flex items-center mb-8">
                            <span className="pt-6 text-sm ml-2">January 1, 2025 - January 31, 2025</span>
                            <p className="text-sm text-gray-500 pt-6 mr-4 ml-4"> | </p>
                            <p className="text-xs text-gray-500 pt-6">Monthly View</p>
                    </div> 
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <SlPrinter className='mr-6 text-xl text-blue-500' />
                            <VscFilePdf className="mr-6 text-xl text-blue-500" />
                        </div>
                        <div>
                            <button className='bg-blue-500 p-2 rounded-lg px-4 text-white text-xs font-semibold'>Add Payroll</button>
                        </div>
                    </div>
                </div>
                <ContractorDashboard />
            </div>
            
        </div>
    );
};

export default Contractors;