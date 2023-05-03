import React from 'react';
import { initialSignupState, useSignup } from '../hooks';

export const SignupContext = React.createContext<ReturnType<typeof useSignup>>({
  state: initialSignupState,
  signup: async () => {
    return;
  },
});

export function SignupService(props: { children: React.ReactNode }) {
  const signup = useSignup();

  return (
    <SignupContext.Provider value={signup}>
      {props.children}
    </SignupContext.Provider>
  );
}

export function useSignupService() {
  return React.useContext(SignupContext);
}
