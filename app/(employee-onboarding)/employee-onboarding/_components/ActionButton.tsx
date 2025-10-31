import { Button } from '@/components/ui/button';
import {
  updateCurrentStep,
  updateFormData,
} from '@/lib/features/employee-onboarding/employeeOnboardingSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ArrowLeft } from 'lucide-react';

const ActionButton = ({
  formValues,
}: {
  formValues?: { [key: string]: string | number | boolean | null };
}) => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(
    (state) => state.employeeOnboarding.currentStep
  );

  const next = () => {
    dispatch(updateFormData(formValues));
    dispatch(updateCurrentStep(currentStep + 1));
  };
  const prev = () => {
    dispatch(updateCurrentStep(currentStep - 1));
  };

  return (
    <div className="border-t mt-[3.75rem] pt-8 wrapper">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-blue-500 underline">
          Terms, Privacy & Cookies
        </p>
        {currentStep > 5 && (
          <Button
            className="w-[5.3rem] md:w-[8rem] ml-36 bg-transparent text-black hover:bg-white"
            onClick={prev}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        )}

        <Button
          className={`px-4 rounded w-36 ${
            currentStep === 5
              ? 'bg-blue-400 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
          }`}
          onClick={next}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ActionButton;
