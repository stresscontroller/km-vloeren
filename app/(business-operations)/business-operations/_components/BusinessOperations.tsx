'use client';

import { useAppSelector } from '@/lib/hooks';
import Step1 from './Step1-BusinessOperations';
import Step2 from './Step2-FinancialInformation';
import Step3 from './Step3-ConnectBank&Payment';
import Step4 from './Step4-TaxInformation';
import Step5 from './Step5-Insurance&LegalInformation';
import Step6 from './Step6-DocumentUpload';

const Onboarding = () => {
  const currentStep = useAppSelector((state) => state.onboarding.currentStep);

  switch (currentStep) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    default:
      return;
  }
};

export default Onboarding;
