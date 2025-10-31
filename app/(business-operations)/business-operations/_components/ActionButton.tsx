import { Button } from '@/components/ui/button';
import {
  updateCurrentStep,
  updateFormData,
} from '@/lib/features/business-operations/businessOperationsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ArrowLeft } from 'lucide-react';
import { GoArrowRight } from 'react-icons/go';

const ActionButton = ({
  formValues,
}: {
  formValues?: { [key: string]: string | number | boolean | null };
}) => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(
    (state) => state.businessOperations.currentStep
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
      <div className="flex items-center justify-between">
        {currentStep > 1 && (
          <Button
            className="w-[5.3rem] md:w-[8rem] ml-36 bg-transparent text-black hover:bg-white"
            onClick={prev}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        )}

        <Button
          className="bg-black text-white w-full md:w-[8rem] ml-auto mr-36 whitespace-nowrap hover:bg-black"
          onClick={next}
          disabled={currentStep === 6}
        >
          Next
          <GoArrowRight className="w-4 h-4 ml-1 font-semibold" />
        </Button>
      </div>
    </div>
  );
};

export default ActionButton;
