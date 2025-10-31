import React from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateNewTicketModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 relative">
        <div className="flex flex-col gap-5 pb-3 border-b border-gray-300">
          <h2 className="font-semibold text-gray-800 text-2xl">
            Create new ticket
          </h2>
          <p>This is a simple modal using Tailwind CSS and Next.js!</p>
        </div>

        <div className="pt-6 flex flex-wrap">
          <div className="w-full sm:w-6/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Ticket Number</label>
              <input
                type="text"
                placeholder="Enter ticket number"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Issue Type</label>
              <select className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm outline-0">
                <option>Select issue</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-6/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Issue Category</label>
              <select className="w-full h-11 p-2 border rounded bg-no-repeat bg-right bg-gray-50 text-gray-400 text-sm outline-0">
                <option>Select category</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:w-6/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Date</label>
              <input
                type="text"
                placeholder="DD / MM / YYYY"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12">
            <div className="p-1">
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="tel"
                placeholder="Enter email address"
                className="w-full p-3 bg-gray-50 border rounded text-sm outline-0"
              />
            </div>
          </div>
          <div className="w-full sm:w-6/12">
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
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white text-black rounded border border-gray-800 text-sm"
              >
                Cancel
              </button>
              <button className="bg-black text-white w-full px-4 py-2 whitespace-nowrap rounded text-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTicketModal;
