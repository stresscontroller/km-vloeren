'use client';

import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info } from 'lucide-react';

type CheckQuoteInputProps = {
  FormSchema: z.ZodObject<{
    quoteCheck2: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
  }>;

  form: UseFormReturn<{
    quoteCheck2?: boolean;
  }>;
};

export function CheckQuoteInput({ FormSchema, form }: CheckQuoteInputProps) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="quoteCheck2"
          render={({ field }) => (
            <FormItem className="bg-transparent">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value ? String(field.value) : undefined} // Ensure value is a string
                  className="flex flex-col gap-4 bg-transparent"
                >
                  <FormItem>
                    <FormLabel className="text-lg cursor-pointer !mt-0 [&:has([data-state=checked])>div]:border [&:has([data-state=checked])>div]:border-oneco">
                      <FormControl>
                        <RadioGroupItem
                          value="Arcu Ullamcorper"
                          className="sr-only"
                        />
                      </FormControl>
                      <div className="flex items-center gap-4 p-4 border shrink-0 rounded-md bg-white shadow">
                        <RadioGroupItem value="Arcu Ullamcorper" />
                        <div className="flex items-center justify-between flex-1 gap-6">
                          <div>
                            <p className="text-lg">Arcu Ullamcorper</p>
                            <span className="text-base font-normal">
                              Vulputate eu adipiscing viverra feugiat habitasse
                              vel
                            </span>
                          </div>
                          <Info className="w-6 h-6" />
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="text-lg cursor-pointer !mt-0 [&:has([data-state=checked])>div]:border [&:has([data-state=checked])>div]:border-oneco">
                      <FormControl>
                        <RadioGroupItem
                          value="Morbi enim mattis turpis"
                          className="sr-only"
                        />
                      </FormControl>
                      <div className="flex items-center gap-4 p-4 border shrink-0 rounded-md bg-white shadow">
                        <RadioGroupItem value="Morbi enim mattis turpis" />
                        <div className="flex items-center justify-between flex-1 gap-6">
                          <div>
                            <p className="text-lg">Morbi enim mattis turpis</p>
                            <span className="text-base font-normal">
                              Sit viverra volutpat commodo natoque volutpat
                            </span>
                          </div>
                          <Info className="w-6 h-6" />
                        </div>
                      </div>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
