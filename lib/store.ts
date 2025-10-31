import { configureStore } from '@reduxjs/toolkit';
import onboardingSlice from './features/onboarding/onboardingSlice';
import companyOnboardingSlice from './features/company/onboardingSlice';
import businessOperationsSlice from './features/business-operations/businessOperationsSlice';
import employeeOnboardingSlice from './features/employee-onboarding/employeeOnboardingSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      onboarding: onboardingSlice,
      companyOnboarding: companyOnboardingSlice,
      businessOperations: businessOperationsSlice,
      employeeOnboarding: employeeOnboardingSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
