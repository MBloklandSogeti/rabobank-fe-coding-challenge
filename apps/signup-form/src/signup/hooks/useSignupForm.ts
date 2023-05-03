import { useForm } from 'react-hook-form';
import { SignupForm } from '../types';
import { useSignupService } from '../services';
import { useAlertService } from '../../shared';

export function useSignupForm() {
  const { newAlert } = useAlertService();
  const { signup } = useSignupService();

  const formMethods = useForm<SignupForm>({ mode: 'onChange' });

  const handleValidSubmit = (form: SignupForm) => {
    signup(form);
  };

  const handleInvalidSubmit = () => {
    newAlert({
      type: 'danger',
      title: 'Registration form is not valid.',
      message: 'Please fill in the form correctly.',
    });
  };

  const handleSubmit = formMethods.handleSubmit(
    handleValidSubmit,
    handleInvalidSubmit
  );

  return { formMethods, handleSubmit };
}
