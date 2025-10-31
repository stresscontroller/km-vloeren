import { createSlice } from "@reduxjs/toolkit";
const initialState: {
  currentStep: number;
  submitForm: boolean;
  plan: string;
} = {
  currentStep: 0,
  submitForm: false,
  plan: "",
};

export const companyOnboardingSlice = createSlice({
  name: "companyOnboarding",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < 6) state.currentStep += 1;
    },
    submitData: (state) => {
      state.submitForm = true; // Toggle to trigger form submission
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    resetSubmit: (state) => {
      state.submitForm = false; // Reset submitForm to false
    },
  },
});

export const { submitData, resetSubmit, nextStep, setPlan } =
  companyOnboardingSlice.actions;

export default companyOnboardingSlice.reducer;
