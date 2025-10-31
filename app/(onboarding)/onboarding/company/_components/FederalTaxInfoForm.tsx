"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FederalTaxInfoFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormHeadText from "./FormHeadText";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { nextStep, resetSubmit } from "@/lib/features/company/onboardingSlice";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import SelectInputContent from "@/components/shared/SelectInputContent";
import { companyType } from "@/data/companyType";
import { Button } from "@/components/ui/button";

const FederalTaxInfoForm = () => {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector(
    (state) => state.companyOnboarding.currentStep
  );
  const form = useForm<z.infer<typeof FederalTaxInfoFormSchema>>({
    resolver: zodResolver(FederalTaxInfoFormSchema),
    defaultValues: {
      federalEIN: "",
      companyType: "",
      federalFilingForm: "",
      industry: "",
    },
  });

  const submitForm = useAppSelector(
    (state) => state.companyOnboarding.submitForm
  );

  const onSubmit = (values: z.infer<typeof FederalTaxInfoFormSchema>) => {
    console.log(values);
    dispatch(nextStep());
  };

  return (
    <div className="h-full pb-20">
      <Form {...form}>
        <form
          className="max-w-[600px] h-full flex flex-col "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-6 mb-6">
            <FormHeadText
              headerText="Federal Tax Info"
              subText="In mauris massa est venenatis cursus purus sagittis in. Cum a sem ut in eget eu ut condimentum. Semper ut sed augue nisl non malesuada rhoncus."
            />
          </div>

          <div className="mb-8">
            <FormField
              control={form.control}
              name="federalEIN"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-3 text-[10px]">
                    Federal EIN
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Enter federal EIN number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm">
                    In mauris massa est venenatis cursus purus sagittis a sem ut
                    in eget
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-3 text-[10px]">Company Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectInputContent data={companyType} />
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="federalFilingForm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-3 text-[10px]">
                    Federal Filing Form
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Select filing form"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm">
                    Natoque egestas neque ac orci libero quis at et porta.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-3 text-[10px]">
                  Which industry are you in?
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Search industry type"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm">
                    Natoque egestas neque ac orci libero quis at et porta.
                  </FormDescription>
                  <FormMessage />
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

export default FederalTaxInfoForm;
