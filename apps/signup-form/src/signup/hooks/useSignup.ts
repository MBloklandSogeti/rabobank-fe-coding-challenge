import React from 'react';
import { SignupForm } from '../types';
import { postSignupForm } from '../api';
import { useAlertService } from '../../shared';

export type SignupState = {
  submitting: boolean;
};

export const initialSignupState: SignupState = {
  submitting: false,
};

export function useSignup() {
  const { newAlert } = useAlertService();
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

    await postSignupForm(form, abortController.signal)
      .then(() => {
        newAlert({
          type: 'success',
          title: 'Successfully registered!',
          message: 'You have been registered for Rabobank.',
        });
      })
      .catch(() => {
        newAlert({
          type: 'danger',
          title: 'Something went wrong..',
          message: 'Please try again (later).',
        });
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
