import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  saveExit,
  updateCurrentStep,
  updateFormData,
} from '@/lib/features/onboarding/onboardingSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ArrowLeft } from 'lucide-react';
import { CreateAccountForm } from './CreateAccountForm';
import { useRouter } from 'next/navigation';

const ActionButton = ({
  formValues,
}: {
  formValues?: { [key: string]: string | number | boolean | null };
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.onboarding.currentStep);
  const paymentSuccess = useAppSelector(
    (state) => state.onboarding.paymentSuccess
  );

  const next = () => {
    dispatch(updateFormData(formValues));

    if (currentStep === 6) {
      router.push('/onboarding/company');
    } else if (paymentSuccess) {
      dispatch(updateCurrentStep(8));
    } else {
      dispatch(updateCurrentStep(currentStep + 1));
    }
  };
  const prev = () => {
    dispatch(updateCurrentStep(currentStep - 1));
  };
  const save = (values?: {
    [key: string]: string | number | boolean | null;
  }) => {
    dispatch(saveExit(values));
  };

  return (
    <div className="border-t mt-[3.75rem] pt-8 wrapper">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <Button
          variant="outline"
          className="w-[5.3rem] md:w-[12.5rem]"
          disabled={currentStep === 1}
          onClick={prev}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-[12.5rem] whitespace-nowrap bg-[#DCEAFE]"
                onClick={() => save(formValues)}
              >
                Save & Exit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <CreateAccountForm />
            </DialogContent>
          </Dialog>
          <Button
            className="bg-[#017CEF] text-white w-full md:w-[12.5rem] whitespace-nowrap"
            onClick={next}
            disabled={currentStep === 7 && !paymentSuccess}
          >
            {paymentSuccess ? 'Finish Enrollment' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionButton;