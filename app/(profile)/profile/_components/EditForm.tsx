'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import SelectInputContent from '@/components/shared/SelectInputContent';
import { bankAccountType } from '@/data/bankAccountType';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';

import { SlCloudUpload } from 'react-icons/sl';

const FormSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Kindly enter a valid email' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(2, 'Password should be at least six characters'),
    reEnterPassword: z.string(),
    birthday: z.string(),
    country: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    taxID: z.string(),
    notification: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.reEnterPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['reEnterPassword'],
    }
  );

const EditForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="h-full pb-20">
      <Form {...form}>
        <form
          className="h-full flex flex-col gap-12"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-6">
            <h4 className="font-semibold text-xl w-48 text-end">
              Personal Info
            </h4>
            <div className="px-48 space-y-3">
              <div className="flex flex-row gap-4">
                <div className="w-6/12">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-medium mt-3">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                            placeholder="Enter first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-6/12">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-medium mt-3">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                            placeholder="Enter last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-medium mt-3">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-medium mt-3">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reEnterPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-medium mt-3">
                      Re-enter Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                        placeholder="Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-medium mt-3">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                        placeholder="Enter your date of birth"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-semibold text-xl w-48 text-end">Address</h4>
            <div className="px-48 space-y-3">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-3 text-[10px]">Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
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
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-3 text-[10px]">City</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectInputContent data={bankAccountType} />
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row gap-4">
                <div className="w-6/12">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-medium mt-3">
                          State
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                            placeholder="Enter state"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-6/12">
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-medium mt-3">
                          Zip Code
                        </FormLabel>
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
                </div>
              </div>
              <FormField
                control={form.control}
                name="taxID"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-medium mt-3">
                      Tax ID
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="font-semibold text-lg !mt-0 placeholder:text-sm placeholder:font-normal"
                        placeholder="Enter your tax ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-semibold text-xl w-48 text-end">Security</h4>
            <div className="px-48 space-y-3">
              <div className="flex flex-col">
                <span className="text-sm">Two-step verification</span>
                <a className="text-blue-500 underline font-semibold">
                  Activate for two-step security
                </a>
              </div>
              <div>
                <span className="text-sm">Photo ID Backup</span>
                <div className="border border-dashed border-blue-500 flex flex-col items-center py-20">
                  <p className="text-sm font-semibold text-gray-400">
                    Lorem ipsum vellum
                  </p>
                  <span className="text-sm text-gray-400 mt-1">
                    Max 10MB(jpeg, png)
                  </span>
                  <i className="text-xs text-gray-400 my-4">or</i>
                  <SlCloudUpload className="text-blue-500 text-5xl" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Last Account Activity</span>
                <a className="text-blue-500 underline font-semibold">
                  View account activity history
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-semibold text-xl w-48 text-end">
              Notifications
            </h4>
            <div className="px-48 space-y-3">
              <div className="text-lg cursor-pointer">
                <div className="flex items-center gap-4 p-4 shrink-0 rounded-md bg-white">
                  <input
                    type="checkbox"
                    className="aspect-square h-6 w-6 data-[state=checked]:bg-oneco  border text-oneco ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between flex-1 gap-6">
                    <div>
                      <p className="text-lg font-semibold">
                        Porttitor risus laoreet ut duipsum
                      </p>
                      <span className="text-base font-normal">
                        Augue eget tincidunt nibh sed pellentesque morbi eget
                        morbi porta nulla
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg cursor-pointer">
                <div className="flex items-center gap-4 p-4 shrink-0 rounded-md bg-white">
                  <input
                    type="checkbox"
                    className="aspect-square h-6 w-6 data-[state=checked]:bg-oneco  border text-oneco ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between flex-1 gap-6">
                    <div>
                      <p className="text-lg font-semibold">
                        Aliquet convallis mauris eget vellum
                      </p>
                      <span className="text-base font-normal">
                        Convallis ac ut sed amet. In cras risus sit ac nunc est
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg cursor-pointer">
                <div className="flex items-center gap-4 p-4 shrink-0 rounded-md bg-white">
                  <input
                    type="checkbox"
                    className="aspect-square h-6 w-6 data-[state=checked]:bg-oneco  border text-oneco ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between flex-1 gap-6">
                    <div>
                      <p className="text-lg font-semibold">
                        Nibh elit vitae est turpis ipsum
                      </p>
                      <span className="text-base font-normal">
                        Augue eget tincidunt nibh sed pellentesque morbi eget
                        morbi porta nulla
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg cursor-pointer">
                <div className="flex items-center gap-4 p-4 shrink-0 rounded-md bg-white">
                  <input
                    type="checkbox"
                    className="aspect-square h-6 w-6 data-[state=checked]:bg-oneco  border text-oneco ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between flex-1 gap-6">
                    <div>
                      <p className="text-lg font-semibold">
                        Imperdiet non nisi curabitur sit posuere eget
                      </p>
                      <span className="text-base font-normal">
                        Sit condimentum blandit vestibulum eget orc
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg cursor-pointer">
                <div className="flex items-center gap-4 p-4 shrink-0 rounded-md bg-white">
                  <input
                    type="checkbox"
                    className="aspect-square h-6 w-6 data-[state=checked]:bg-oneco  border text-oneco ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between flex-1 gap-6">
                    <div>
                      <p className="text-lg font-semibold">
                        Aliquet convallis mauris eget vellum
                      </p>
                      <span className="text-base font-normal">
                        Convallis ac ut sed amet. In cras risus sit ac nunc est
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg cursor-pointer">
                <div className="flex items-center gap-4 p-4 shrink-0 rounded-md bg-white">
                  <input
                    type="checkbox"
                    className="aspect-square h-6 w-6 data-[state=checked]:bg-oneco  border text-oneco ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <div className="flex items-center justify-between flex-1 gap-6">
                    <div>
                      <p className="text-lg font-semibold">
                        Rhoncus tellus lorem sagittis nibh tempus sed gravida.
                      </p>
                      <span className="text-base font-normal">
                        Et massa phasellus pellentesque sit sed morbi. Ultrices
                        natoque lacus id blandit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditForm;
