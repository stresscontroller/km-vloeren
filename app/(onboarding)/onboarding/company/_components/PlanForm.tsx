"use client";
import PlanCard from "./PlanCard";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { updateCurrentStep } from "@/lib/features/onboarding/onboardingSlice";
import { setPlan } from "@/lib/features/company/onboardingSlice";

const planOptions = [
  {
    name: "Consectetur",
    subname: "Tristique diam",
    price: 10,
    priceText: "Felis morbi nibh",
    buttonText: "Magna non",
    checklistHeading: "Sapien purus quis vellum volutpat eget:",
    icon: "/icon/plan1Print.svg",
  },
  {
    name: "6 Pharetra",
    subname: "Tristique diam",
    price: 99,
    priceText: "/vellum",
    buttonText: "Magna non",
    checklistHeading: "Leo libero volutpat morbi feugiat sed in risus:",
    checklistOptions: ["Sed mauris sagittis veli"],
    icon: "/icon/plan2Print.svg",
  },
  {
    name: "12 Celerisque",
    subname: "Tristique diam",
    price: 149,
    priceText: "/vellum",
    buttonText: "Proin fusce",
    checklistHeading: "Orci lacus netus eget vestibulum felis:",
    checklistOptions: ["Sed mauris sagittis veli", "100% sagitis pra velum"],
    icon: "/icon/plan3Print.svg",
  },
];

const FormSchema = z.object({
  plan: z.enum(["12 Celerisque", "6 Pharetra", "Consectetur"], {
    required_error: "Kindly Select a Plan",
  }),
});
const PlanForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(setPlan(data.plan));
    dispatch(updateCurrentStep(7));
    router.push("/onboarding");
  }

  return (
    <div className="h-full pb-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 h-full flex flex-col "
        >
          <div className="flex items-center justify-center flex-col gap-[0.625rem] mb-8">
            <h1 className="font-bold text-[2.375rem] text-nowrap">
              Vitae mattis at nunc enim vellum?
            </h1>
            <p className="text-[1.125rem] font-light text-nowrap">
              Ornare praesent eget non ac tristique porttitor nulla morbi
            </p>
          </div>
          <div className="mb-8">
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className=" bg-transparent">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value as unknown as string}
                      className="flex flex-col gap-4 bg-transparent"
                    >
                      <div className="flex gap-4 [&>*:nth-child(3)]:bg-[#6375F9] [&>*:nth-child(1)]:shadow-[0_0_13px_2px_rgba(0,0,0,0.05)] [&>*:nth-child(1)]:border [&>*:nth-child(1)]:border-neutral [&>*:nth-child(3)]:shadow-[0_0_13px_2px_rgba(99,117,249,0.54)]  ">
                        {planOptions.map((plan) => (
                          <PlanCard key={plan.name} plan={plan} />
                        ))}
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-auto flex justify-end">
            <Button size="lg" className="bg-[#0156A8]">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PlanForm;
