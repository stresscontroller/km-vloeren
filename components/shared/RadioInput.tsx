import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";

type RadioInputProps = {
  field: any;
  options: { label: string; value: string }[];
  label: string;
  showLabel ?: boolean;
};

const RadioInput = ({ field, options, label, showLabel=true }: RadioInputProps) => {
  return (
    <RadioGroup
      onValueChange={field.onChange}
      defaultValue={field.value as unknown as string}
      className="flex flex-col gap-4 bg-transparent"
    >
      {showLabel && <FormLabel className="font-semibold text-lg">{label}</FormLabel>}
      {options?.map((option, index) => (
        <FormItem key={`key-${label.replace(" ", "_") + index}`}>
          <FormLabel className="text-lg cursor-pointer !mt-0 ">
            <FormControl>
              <RadioGroupItem value="" className="sr-only" />
            </FormControl>
            <div className="flex items-center gap-4">
              <RadioGroupItem value={option.value} />
              <p>{option.label}</p>
            </div>
          </FormLabel>
        </FormItem>
      ))}
    </RadioGroup>
  );
};

export default RadioInput;
