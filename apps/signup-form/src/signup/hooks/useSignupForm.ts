import { useForm } from 'react-hook-form';
import { SignupForm } from '../types';
import { useSignupService } from '../services';

export function useSignupForm() {
  const { signup } = useSignupService();

  const formMethods = useForm<SignupForm>({ mode: 'onChange' });

  const handleSubmit = (form: SignupForm) => {
    signup(form);
  };

  return { formMethods, handleSubmit };
}
