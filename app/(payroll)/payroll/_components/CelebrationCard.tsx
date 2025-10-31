import { icons } from "lucide-react";
import Image from 'next/image';

const CelebrationCard = () => {
    return (
        <div className="p-4 h-auto border border-neutral shadow-gray-150 shadow-xl rounded-lg bg-white mt-6">

            <h2 className="text-md ml-2 mt-4 mb-4">Celebrations</h2>
  
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col ml-5">
                    <span className="text-xs text-gray-400 mb-1">Tuesday, March 28</span>
                    <span className="text-sm text-gray-500">Kathryn Murphy first day</span>
                </div>
                <img
                    src="/images/mattdawson-profile-09.png" 
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-5"
                />
            </div>

            <hr className="ml-5 mr-5 mb-4"/>
  
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col ml-5">
                    <span className="text-xs text-gray-400 mb-1">Tuesday, April 4</span>
                    <span className="text-sm text-gray-500">Kathryn Murphy birthday</span>
                </div>
                <img
                    src="/images/mattdawson-profile-09.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-5"
                />
            </div>
            <div className="mb-2 ml-5 flex flex-row">
                <img
                    src="/icon/email.svg"
                    alt="email"
                    className="w-4 h-4 mr-3"
                />
                <button className="text-blue-500 text-xs">Send a Card</button>
            </div>

            <hr className="ml-2 ml-5 mr-5 mb-5"/>

            <div className="ml-5 mb-4">
                <button className="text-blue-500 text-xs flex items-center">
                <img
                    src="/icon/reminder.svg"
                    alt="email"
                    className="w-5 h-5 mr-3"
                />
                Add reminders to your calendar
                </button>
            </div>
        </div>

    );
};

export default CelebrationCard;