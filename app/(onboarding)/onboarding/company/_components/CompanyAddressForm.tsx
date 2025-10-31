"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CompanyAddressFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, {
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormHeadText from "./FormHeadText";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { nextStep, resetSubmit } from "@/lib/features/company/onboardingSlice";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import SelectInputContent from "@/components/shared/SelectInputContent";
import { states } from "@/data/state";
import { Button } from "@/components/ui/button";

const CompanyAddressForm = () => {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector(
    (state) => state.companyOnboarding.currentStep
  );

  const form = useForm<z.infer<typeof CompanyAddressFormSchema>>({
    resolver: zodResolver(CompanyAddressFormSchema),
    defaultValues: {
      city: "",
      phone: "",
      state: "",
      street1: "",
      street2: "",
      zip: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CompanyAddressFormSchema>) => {
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
              headerText="Company Address"
              subText="Pellentesque varius sit enim morbivorttitor molestie"
            />
            <FormHeadText
              headerText="Enter bank account manually"
              subText="Nunc eleifend est est tincidunt sagittis in adipiscing fames. Amet sit odio orci imper proin donec neque enim in. At cras vivamus dui massa volutpat pharetra."
            />
          </div>
          <div className="mb-8">
          <FormField
            control={form.control}
            name="street1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-3 text-[10px]">Street 1</FormLabel>
                <FormControl>
                  <Input
                    className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                    placeholder="000 Jean Bapsite Lake Share Dr"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-3 text-[10px]">Street 2</FormLabel>
                <FormControl>
                  <Input
                    className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                    placeholder="Enter street address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-3 text-[10px]">City</FormLabel>
                <FormControl>
                  <Input
                    className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                    placeholder="Enter name of city"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-3 text-[10px]">State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectInputContent data={states} />
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-3 text-[10px]">Zip</FormLabel>
                <FormControl>
                  <Input
                    className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                    placeholder="Enter zip code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-3 text-[10px]">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                    placeholder="Enter phone number"
                    {...field}
                  />
                </FormControl>
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

export default CompanyAddressForm;
