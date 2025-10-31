import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  currentStep: number;
  formData: { [key: string]: string | number | boolean | null };
} = {
  currentStep: 1,
  formData: {},
};

export const employeeOnboardingSlice = createSlice({
  name: 'employeeOnboarding',
  initialState,
  reducers: {
    updateCurrentStep: (state, action) => {
      if (state.currentStep > 9) return;
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateCurrentStep, updateFormData } =
  employeeOnboardingSlice.actions;

export default employeeOnboardingSlice.reducer;
