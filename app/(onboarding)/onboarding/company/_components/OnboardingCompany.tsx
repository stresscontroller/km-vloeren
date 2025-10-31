"use client";

import { useAppSelector } from "@/lib/hooks";
import CompanyAddressForm from "./CompanyAddressForm";
import BankAccountForm from "./BankAccountForm";
import FederalTaxInfoForm from "./FederalTaxInfoForm";
import { HealthBenefitForm } from "./HealthBenefitForm";
import PlanForm from "./PlanForm";

const OnboardingCompany = () => {
  const currentStep = useAppSelector(
    (state) => state.companyOnboarding.currentStep
  );

  switch (currentStep) {
    case 0:
      return <CompanyAddressForm />;
    case 1:
      return <BankAccountForm />;
    case 2:
      return <FederalTaxInfoForm />;
    case 3:
      return <HealthBenefitForm />;
    case 4:
      return <PlanForm />;
    default:
      return;
  }
};

export default OnboardingCompany;
