import { FormProvider, useFormContext } from 'react-hook-form';
import { useSignupForm } from '../hooks';
import { SignupForm } from '../types';

export function SignupFormService(props: { children: React.ReactNode }) {
  const { formMethods, handleSubmit } = useSignupForm();

  return (
    <FormProvider {...formMethods}>
      {JSON.stringify(formMethods.formState.errors)}
      <form
        onSubmit={formMethods.handleSubmit(handleSubmit, () => {
          console.log('hallodds');
        })}
      >
        {JSON.stringify(formMethods.formState.isValid)}
        {props.children}
      </form>
    </FormProvider>
  );
}

export function useSignupFormService() {
  return useFormContext<SignupForm>();
}
