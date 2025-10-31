"use client";

import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { HealthBenefitFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormHeadText from "./FormHeadText";
import RadioInput from "@/components/shared/RadioInput";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { nextStep, resetSubmit } from "@/lib/features/company/onboardingSlice";
import { useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";

const option1 = {
  label: "Porttitor risus laoreet ut duipsum sit facilisi nibh?",
  options: [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
    },
  ],
};
const option2 = {
  label: "Tincidunt urna nisi tellus et magna orci condime?",
  options: [
    {
      label: "Yes",
      value: "yes",
    },
    {
      label: "No",
      value: "no",
    },
  ],
};
const option3 = {
  label: "Quis commodo auctor imperdiet lacus neque nunc etiam vellum?",
  options: [
    {
      label: "A sit aliquam morbi lectus. Sed ultrices pellentesque vellum",
      value: "a sit aliquam morbi lectus. Sed ultrices pellentesque vellum",
    },
    {
      label: "Massa quam vitae gravida elit elementum ultricies loem",
      value: "massa quam vitae gravida elit elementum ultricies loem",
    },
  ],
};

export function HealthBenefitForm() {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector(
    (state) => state.companyOnboarding.currentStep
  );

  const form = useForm<z.infer<typeof HealthBenefitFormSchema>>({
    resolver: zodResolver(HealthBenefitFormSchema),
  });

  const onSubmit = (values: z.infer<typeof HealthBenefitFormSchema>) => {
    console.log(values);
    dispatch(nextStep());
  };

  return (
    <div className="h-full pb-20">
      <Form {...form}>
        <form
          className="max-w-[605px] h-full flex flex-col "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-6 mb-11">
            <FormHeadText
              headerText="Health Benefit"
              subText="Morbi arcu sagittis risus egestas et. Vitae molestie lacus auctor ut suspendisse nulla arcu ac. Elementum consectetur ut amet interdum feugiat id purus ac quam. Sit posuere fermentum feugiat tristique facilisi. Viverra bibendum erat."
            />
          </div>

          <div className="space-y-11 mb-6">
            <FormField
              control={form.control}
              name="porttitor"
              render={({ field }) => (
                <FormItem className=" bg-transparent">
                  <RadioInput
                    label={option1.label}
                    options={option1.options}
                    field={field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tincidunt"
              render={({ field }) => (
                <FormItem className=" bg-transparent">
                  <RadioInput
                    label={option2.label}
                    options={option2.options}
                    field={field}
                  />
                </FormItem>
              )}
            />

            <div>
              <div className="mb-[22px]">
                <FormLabel className="font-semibold text-lg">
                  Quis commodo auctor imperdiet lacus neque nunc etiam vellum?
                </FormLabel>
                <p className="text-grey text-sm max-w-[600px]">
                  Massa volutpat etiam egestas donec laoreet aenean lectus.
                  Felis et bibendum dui non cursus porta at aliquam tempus. A
                  fermentum orci sit diam. Nunc eu pharetra sodales sed.
                  Pharetra eget hendrerit sit pretium id orci turpis.
                </p>
              </div>
              <FormField
                control={form.control}
                name="quis"
                render={({ field }) => (
                  <FormItem className=" bg-transparent">
                    <RadioInput
                      label={option3.label}
                      options={option3.options}
                      field={field}
                      showLabel={false}
                    />
                  </FormItem>
                )}
              />
            </div>
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
}
