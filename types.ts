import { z } from "zod";

export const CompanyAddressFormSchema = z.object({
  street1: z
    .string()
    .min(1, { message: "Please fill in the street address of your company" }),
  street2: z.string().optional(),
  city: z
    .string()
    .min(1, { message: "Please fill in the city of your company" }),
  state: z
    .string()
    .min(1, { message: "Please select the state of your company" }),
  zip: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "Please enter a valid zip code" }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid 10-digit phone number",
  }),
});

export const BankAccountFormSchema = z
  .object({
    bankName: z
      .string()
      .min(1, { message: "Please fill in the name of your bank" }),
    accountType: z.string().optional(),
    checkingNumber: z
      .string()
      .min(1, { message: "Please fill in the checking account number" }),
    confirmCheckingNumber: z
      .string()
      .min(1, { message: "Please confirm the checking account number" }),
    routingNumber: z.string().regex(/^\d{9}$/, {
      message: "Please enter a valid 9-digit routing number",
    }),
  })
  .refine(
    (values) => {
      return values.checkingNumber === values.confirmCheckingNumber;
    },

    {
      message: "Checking number must match!",
      path: ["confirmCheckingNumber"],
    }
  );

export const FederalTaxInfoFormSchema = z.object({
  federalEIN: z.string().min(1, { message: "Please fill in the Federal EIN" }),
  companyType: z.string().optional(),
  federalFilingForm: z
    .string()
    .min(1, { message: "Please fill in the federal filing form" }),
  industry: z.string().min(1, { message: "Please fill in the industry" }),
});

export const HealthBenefitFormSchema = z.object({
  porttitor: z.enum(["yes", "no"]),
  tincidunt: z.enum(["yes", "no"]),
  quis: z.enum(["a sit aliquam morbi lectus. Sed ultrices pellentesque vellum", "massa quam vitae gravida elit elementum ultricies loem"]),
});

export const PaymentFormSchema = z.object({
  cardHolderName: z.string()
    .nonempty({ message: "Card holder name is required" }),
  cardNumber: z.string()
    .regex(/^\d{13,19}$/, { message: "Card number must be between 13 and 19 digits" }),
  ccv: z.string()
    .regex(/^\d{3,4}$/, { message: "CCV must be 3 or 4 digits" }),
    expDate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: "Expiration date must be in MM/YY format" })
    .refine(date => {
      const [month, year] = date.split('/').map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Get last two digits of current year
      const currentMonth = currentDate.getMonth() + 1;
      return (year > currentYear) || (year === currentYear && month >= currentMonth);
    }, { message: "Expiration date must be in the future" })
});