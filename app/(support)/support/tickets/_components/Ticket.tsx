'use client';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { GoInfo } from 'react-icons/go';

import TransactionTable from './TransactionTable';
const Ticket = () => {
  return (
    <div className="flex flex-col">
      <div className="my-5">
        <p className="text-2xl font-semibold">Support Tickets</p>
        <p className="text-xs text-gray-500">
          Porta aliquet felis dapibus aliquet varius fames pharetra penatibus
          cras vitae
        </p>
      </div>
      <div className="flex flex-col gap-5 bg-white rounded-xl p-8 shadow">
        <div>
          <p className="text-xl font-semibold">How can we help?</p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 md:w-4/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Ticket Number</label>
              <input
                type="text"
                placeholder="Enter ticket number"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Issue Type</label>
              <select className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm outline-0">
                <option>Select issue</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Issue Category</label>
              <select className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm outline-0">
                <option>Select category</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Date</label>
              <input
                type="text"
                placeholder="DD / MM / YYYY"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="tel"
                placeholder="Enter email address"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Subject</label>
              <select className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm outline-0">
                <option>Select subject</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-6/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Description</label>
              <textarea
                rows={6}
                placeholder="Enter description info"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12">
            <div className="p-1 space-y-6">
              <div className="mb-2">
                <label className="block mb-2 text-sm">File</label>
                <div className="w-full h-[145px] p-8 rounded bg-no-repeat border border-dashed border-blue-500 flex justify-center items-center gap-3">
                  <IoCloudUploadOutline className="text-5xl text-blue-500" />
                  <div>
                    <p className="text-gray-400 font-semibold text-sm">
                      Lorem ipsum vellum
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Max 10MB (jpeg, PDF, png)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div>
              <button className="bg-black text-white w-full px-7 py-3 whitespace-nowrap rounded-lg text-sm">
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-10 gap-4">
        <div className="w-full lg:w-8/12 overflow-hidden">
          <div className="p-4 min-w-full bg-white rounded-xl shadow overflow-hidden">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold mt-3 mb-4 flex-grow">
                Transactions
              </p>
              <a href="" className="text-blue-500 font-semibold text-sm">
                View All
              </a>
            </div>
            <div className="overflow-x-auto">
              <TransactionTable />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 flex flex-col gap-3">
          <div className="w-full p-6 flex items-center gap-3 shadow rounded-xl bg-white">
            <GoInfo className="text-xl" />
            <p className="font-semibold">
              Mauris nisl metus elit pretium orci non.
              <a className="text-blue-500 underline">Maecenas. </a>
            </p>
          </div>
          <div className="w-full p-6 flex gap-3 shadow rounded-xl bg-white">
            <div>
              <GoInfo className="text-xl" />
            </div>
            <div className="space-y-3">
              <p className="font-semibold">
                Mauris nisl metus elit pretium orci non maecenas?{' '}
              </p>
              <p className="text-grey text-sm">
                Molestie interdum neque etiam volutpat. At sed consectetur
                egestas tempor purus suspendisse id rhoncus tincidunt. Eu
                consequat fermentum sagittis amet fusce aliquam sit tincidunt
                adipiscing.
              </p>
              <p className="text-grey text-sm">
                Odio nam aliquet suspense nulla ipsum faucibus platea sit.
                Volutpat et magnis nunc condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
