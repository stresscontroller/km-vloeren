import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  currentStep: number;
  formData: { [key: string]: any };
  paymentSuccess: boolean;
} = {
  currentStep: 1,
  formData: {},
  paymentSuccess: false,
};

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    updateCurrentStep: (state, action) => {
      if (state.currentStep > 9) return;
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    updatePayment: (state, action) => {
      state.paymentSuccess = action.payload;
    },
    saveExit: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateCurrentStep, updateFormData, saveExit,updatePayment } =
  onboardingSlice.actions;

export default onboardingSlice.reducer;
