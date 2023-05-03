import React from 'react';
import { SignupForm } from '../types';
import { postSignupForm } from '../api';

export type SignupState = {
  submitting: boolean;
};

export const initialSignupState: SignupState = {
  submitting: false,
};

export function useSignup() {
  const [state, setState] = React.useState(initialSignupState);
  const [currentAbortController, setAbortController] = React.useState(
    new AbortController()
  );

  const toggleSubmitting = () => {
    setState((s) => ({ ...s, submitting: !s.submitting }));
  };

  const signup = async (form: SignupForm) => {
    toggleSubmitting();

    const abortController = new AbortController();
    setAbortController(abortController);

    await postSignupForm(form, abortController.signal).catch(() => {
      return;
    });

    toggleSubmitting();
  };

  React.useEffect(() => {
    return () => {
      currentAbortController.abort();
    };
  });

  return { state, signup };
}
