"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PaymentFormSchema } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updatePayment } from "@/lib/features/onboarding/onboardingSlice";

const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const selectedPlan = useAppSelector((state) => state.companyOnboarding.plan);
  const paymentSuccessful = useAppSelector(
    (state) => state.onboarding.paymentSuccess
  );
  const [paymentSuccess, setPaymentSuccess] =
    useState<boolean>(paymentSuccessful);

  const [btnText, setBtnText] = useState("Confirm Payment");
  const form = useForm<z.infer<typeof PaymentFormSchema>>({
    resolver: zodResolver(PaymentFormSchema),
    defaultValues: {
      cardHolderName: "",
      cardNumber: "",
      ccv: "",
      expDate: "",
    },
  });

  function onSubmit(data: z.infer<typeof PaymentFormSchema>) {
    console.log(data);
    setBtnText("Payment Successful");
    dispatch(updatePayment(true));
    setPaymentSuccess(true);
  }
  return (
    <>
      <div className="w-full max-w-[493px] shadow-md px-4 py-8 rounded-md">
        <div className="flex justify-between mb-12">
          <p className="font-semibold text-lg">Your Plan </p>
          <p className="font-semibold text-lg flex items-center gap-1">
            {`${selectedPlan} Plan`}
            <span className="flex items-center justify-center w-6 h-6 bg-oneco rounded-sm p-1">
              <Check className="text-white" />
            </span>
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-[50.5rem]"
          >
            <FormField
              control={form.control}
              name="cardHolderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">{`Card Holder's Name`}</FormLabel>
                  <FormControl>
                    <Input
                      className="!mt-0"
                      placeholder="Name on card"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">
                    Card Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="!mt-0"
                      placeholder="0000 0000 0000 0000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between gap-8">
              <FormField
                control={form.control}
                name="expDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold">
                      Exp. Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="!mt-0"
                        placeholder="MM/YYYY"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ccv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold">
                      Security Code
                    </FormLabel>
                    <FormControl>
                      <Input className="!mt-0" placeholder="CCV" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="w-full bg-[#6375FD]"
              type="submit"
              size="lg"
              disabled={paymentSuccess}
            >
              {btnText}
            </Button>
          </form>
        </Form>
      </div>
      <p className="text-center mt-4 text-green-500 text-sm">
        {paymentSuccess
          ? "Ornare praesent eget non ac tristique porttitor nulla morbi"
          : ""}
      </p>
    </>
  );
};

export default PaymentForm;
