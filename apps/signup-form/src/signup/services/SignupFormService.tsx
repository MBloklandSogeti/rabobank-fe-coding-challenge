import { FormProvider, useFormContext } from 'react-hook-form';
import { useSignupForm } from '../hooks';
import { SignupForm } from '../types';

export function SignupFormService(props: { children: React.ReactNode }) {
  const { formMethods, handleSubmit } = useSignupForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        {props.children}
      </form>
    </FormProvider>
  );
}

export function useSignupFormService() {
  return useFormContext<SignupForm>();
}
