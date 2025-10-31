import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  currentStep: number;
  formData: { [key: string]: string | number | boolean | null };
} = {
  currentStep: 1,
  formData: {},
};

export const businessOperationsSlice = createSlice({
  name: 'businessOperations',
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
  businessOperationsSlice.actions;

export default businessOperationsSlice.reducer;
