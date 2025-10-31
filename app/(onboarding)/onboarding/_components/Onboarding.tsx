'use client';

import { useAppSelector } from '@/lib/hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import PaymentDialog from './PaymentStatus';
import SignupScreen from './SignupScreen';
import PaymentScreen from './PaymentScreen';
import Processing from './Processing';

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
      return <PaymentDialog />;
    case 7:
      return <SignupScreen />;
    case 8:
      return <PaymentScreen />;
    case 9:
      return <Processing />;
    default:
      return;
  }
};

export default Onboarding;