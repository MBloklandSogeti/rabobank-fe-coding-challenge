import { useController } from 'react-hook-form';
import { Input } from '../../../shared';
import { SignupForm } from '../../types';

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
  const {
    formState: { isSubmitted },
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = useFirstNameInput();

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <Input
      id="first-name"
      label="First name"
      value={value}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      onBlur={onBlur}
      isInvalid={(isTouched || isSubmitted) && invalid}
      isValid={(isTouched || isSubmitted) && isDirty && !invalid}
      feedback={((isTouched || isSubmitted) && error?.message) || undefined}
    />
  );
}
