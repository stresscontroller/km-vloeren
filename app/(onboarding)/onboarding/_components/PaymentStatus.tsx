'use client';
import { FaCheck } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import Image from 'next/image';

const PaymentDialog = () => {
  const status = true;

  if (status) {
    return (
      <>
        <div className="wrapper flex flex-col justify-center items-center mt-[100px]">
          <div className="w-[420px]">
            <div className="flex items-center justify-center flex-col gap-[0.625rem]">
              <Image
                src="/images/check.png"
                alt="Logo"
                height={100}
                width={100}
                className="w-[80px] h-auto"
              />
              <h1 className="font-medium text-[2rem]">Payment Successful</h1>
              <p className="text-[1.125rem] font-normal text-grey text-center max-w-[774px]">
                We have received your membership request.
              </p>
            </div>
            <div className="flex flex-col gap-10 mt-[1.125rem] bg-[#F3F3F3] border-[#DFDFDF] border-2 rounded-xl p-6">
              <div className="flex justify-between">
                <div>
                  <span className="text-grey">Status</span>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-[#177B2D] p-1">
                      <FaCheck className="text-white text-[8px]" />
                    </div>
                    <span>Successful</span>
                  </div>
                </div>
                <div>
                  <span className="text-grey">Date</span>
                  <p>Aug 30, 2024 at 7:54 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-[#E6E6E6] p-4 border-[#DFDFDF] border-2 rounded-xl ">
                <Image
                  src="/images/master-card.png"
                  alt="Logo"
                  height={100}
                  width={100}
                  className="w-[60px] h-auto"
                />
                <div>
                  <span className="text-grey">Mastercard</span>
                  <p>Eding in 3254</p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#017CEF] text-white w-full py-3 rounded-xl shadow-blue-100 shadow-xl mt-[2rem] border-[#017CEF] border">
                Go To Dashboard
              </button>
              <button className="w-full mt-[2rem] border-[#DFDFDF] border rounded-xl py-3 flex items-center gap-2 justify-center">
                <BsDownload /> Invoice Download
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="wrapper flex flex-col justify-center items-center mt-[100px]">
          <div className="w-[420px]">
            <div className="flex items-center justify-center flex-col gap-[0.625rem]">
              <Image
                src="/images/times.png"
                alt="Logo"
                height={100}
                width={100}
                className="w-[80px] h-auto"
              />
              <h1 className="font-medium text-[2rem]">Payment Failed</h1>
              <p className="text-[1.125rem] font-normal text-grey text-center max-w-[774px]">
                Hey there. We tried to change your card but, something went
                wrong. Please update your payment method below to continue.
              </p>
            </div>
            <div>
              <button className="bg-[#017CEF] text-white w-full py-3 rounded-xl shadow-blue-100 shadow-xl mt-[2rem] border-[#017CEF] border">
                Update Payment Method
              </button>
              <p className="text-grey text center mt-[1rem]">or</p>
              <button className="w-full mt-[1rem] border-[#DFDFDF] border rounded-xl py-3 flex items-center gap-2 justify-center">
                <TfiHeadphoneAlt /> Contact Support
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};



export default PaymentDialog;
