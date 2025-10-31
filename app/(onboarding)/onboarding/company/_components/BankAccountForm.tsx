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
import { BankAccountFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormHeadText from "./FormHeadText";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { nextStep } from "@/lib/features/company/onboardingSlice";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import SelectInputContent from "@/components/shared/SelectInputContent";
import { bankAccountType } from "@/data/bankAccountType";

const BankAccountForm = () => {
  const dispatch = useAppDispatch();

  const currentStep = useAppSelector(
    (state) => state.companyOnboarding.currentStep
  );

  const form = useForm<z.infer<typeof BankAccountFormSchema>>({
    resolver: zodResolver(BankAccountFormSchema),
    defaultValues: {
      bankName: "",
      accountType: "",
      checkingNumber: "",
      confirmCheckingNumber: "",
      routingNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof BankAccountFormSchema>) => {
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
              headerText="Bank Account"
              subText="Pellentesque varius sit enim morbivorttitor molestie"
            />
            <FormHeadText
              headerText="Verify your bank account instantly"
              subText="Nunc eleifend est est tincidunt sagittis in adipiscing fames. Amet sit odio orci imper proin donec neque enim in. At cras vivamus dui massa volutpat pharetra."
            />

            <Button size="lg" className="bg-[#0156A8]">
              Verify with Stripe
            </Button>

            <p className="font-semibold text-2xl">or</p>

            <FormHeadText
              headerText="Enter bank account manually"
              subText="Nunc eleifend est est tincidunt sagittis in adipiscing fames. Amet sit odio orci imper proin donec neque enim in. At cras vivamus dui massa volutpat pharetra."
            />
          </div>

          <div className="mb-8">
            <FormField
              control={form.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-medium mt-3">
                    Bank Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Enter bank name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-3 text-[10px]">State</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectInputContent data={bankAccountType} />
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkingNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-medium mt-3">
                    Checking Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Enter checking account number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmCheckingNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-medium mt-3">
                    Confirm Checking Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Re-enter checking account number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="routingNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-medium mt-3">
                    Routing Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                      placeholder="Enter routing number"
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

export default BankAccountForm;
