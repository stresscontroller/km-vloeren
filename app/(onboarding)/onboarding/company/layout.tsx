import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Stepper from "./_components/Stepper";
import Navbar from "./_components/Navbar";

const OnboardingCompanyLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Navbar />
      <div className="flex pt-28 min-h-screen justify-between pe-40 wrapper ">
        <aside className=" w-72 flex flex-col pb-20  items-center px-8  top-40">
          <div className="pb-6 border-b w-full ">
            <Button asChild variant="link" className="w-full">
              <Link href="/dashboard" className="flex items-center gap-2">
                <HomeIcon /> Back to Dashboard
              </Link>
            </Button>
          </div>

          <Stepper />
          <Link href="/" className="mt-auto">
            Terms, Privacy & Cookies
          </Link>
        </aside>
        <main className=" pl-20 flex-1">{children}</main>
      </div>
    </>
  );
};

export default OnboardingCompanyLayout;
