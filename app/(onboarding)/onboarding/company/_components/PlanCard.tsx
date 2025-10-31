import { Button } from "@/components/ui/button";
import { FormControl, FormItem } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

type planCardProps = {
  plan: {
    name: string;
    subname: string;
    price: number;
    priceText: string;
    buttonText: string;
    checklistHeading: string;
    checklistOptions?: string[];
    icon: string;
  };
};

const PlanCard = ({ plan }: planCardProps) => {
  return (
    <FormItem className="h-max rounded-md ">
      <div className=" w-[283px] p-6 pb-10">
        <div className="flex justify-between">
          <Image
            className="mt-4"
            width={28}
            height={28}
            alt={plan.name}
            src={plan.icon}
          />
          <FormControl>
            <RadioGroupItem value={plan.name} />
          </FormControl>
        </div>
        <div className="mt-8">
          <h2
            className={cn(
              "text-2xl font-semibold",
              plan.name.includes("12") ? " text-white" : "text-black"
            )}
          >
            {plan.name}
          </h2>
          <p
            className={cn(
              "text-sm  mt-1",
              plan.name.includes("12") ? "text-white " : "text-[#7E7E7E]"
            )}
          >
            {plan.subname}
          </p>
        </div>

        <div
          className={cn("mt-10", plan.name.includes("12") ? "text-white" : "")}
        >
          <div className="flex">
            <span className="text-3xl mt-4 font-semibold">$</span>
            <div>
              <p className="font-semibold text-8xl">{plan.price}</p>
              <p
                className={cn(
                  "text-sm ",
                  plan.name.includes("12") ? "text-white " : "text-[#7E7E7E]"
                )}
              >
                {plan.priceText}
              </p>
            </div>
          </div>
        </div>

        <Button
          className={cn(
            "w-full mt-8  font-semibold tracking-wider",
            plan.name.includes("12")
              ? "bg-white text-[#6375F9]"
              : "bg-[#6375F9]"
          )}
        >
          {plan.buttonText}
        </Button>

        <div
          className={cn(
            "mt-8",
            plan.name.includes("12") ? "text-white" : "text-black"
          )}
        >
          <p className="font-semibold tracking-wider">
            {plan.checklistHeading}
          </p>
          <div className="space-y-6 mt-4">
            <p className="flex items-center text-sm gap-4">
              <Check className="w-4 h-4 text-[#12B76A]" /> Eget adipiscing
              quisque vel
            </p>
            <p className="flex items-center text-sm gap-4">
              <Check className="w-4 h-4 text-[#12B76A]" /> Vellum libero tortor
              odio nulla
            </p>
            <p className="flex items-center text-sm gap-4">
              <Check className="w-4 h-4 text-[#12B76A]" /> Quisque semper
              facilisis
            </p>
            {plan.checklistOptions?.map((option, idx) => (
              <p
                key={idx}
                className="flex items-center text-sm gap-4 font-semibold"
              >
                <Check className="w-4 h-4 text-[#12B76A]" /> {option}
              </p>
            ))}
          </div>
        </div>
      </div>
    </FormItem>
  );
};

export default PlanCard;
