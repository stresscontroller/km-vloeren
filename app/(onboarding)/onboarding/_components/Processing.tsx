"use client";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Processing = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/dashboard");
  }, 5000);
  
  return (
    <div className="wrapper mb-[6rem]">
      <div className="flex items-center justify-center flex-col gap-[0.625rem]">
        <Image
          src="/images/procesing.png"
          alt="Computer"
          width={290}
          height={290}
        />
        <p className="text-4xl mt-[70px] text-nowrap font-medium">
          Preparing your plan
        </p>
        <p className="text-lg text-[#797979] my-[70px]">
          Semer tellus pulvinar vivamus...
        </p>
        <div>
          <Loader className="w-10 h-10 animate-spin text-stone-400" />
        </div>
      </div>
    </div>
  );
};

export default Processing;
