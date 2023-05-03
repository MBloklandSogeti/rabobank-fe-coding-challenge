import { useController } from 'react-hook-form';
import { Input } from '../../../shared';
import { SignupForm } from '../../types';
import { useSignupFormService } from '../../services';

export function useFirstNameInput() {
  const controller = useController<SignupForm>({
    name: 'firstName',
    defaultValue: '',
    rules: {
      required: 'First name is a required field.',
    },
  });

  return controller;
}

export function FirstNameInput() {
  const { trigger } = useSignupFormService();
  const {
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = useFirstNameInput();

  const handleChange = (value: string) => {
    onChange(value);
    trigger('password');
  };

  return (
    <Input
      id="first-name"
      label="First name"
      value={value}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      onBlur={onBlur}
      isInvalid={isTouched && invalid}
      isValid={isTouched && isDirty && !invalid}
      feedback={(isTouched && error?.message) || undefined}
    />
  );
}
