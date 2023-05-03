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
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = useFirstNameInput();

  return (
    <Input
      id="first-name"
      label="First name"
      value={value}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      isInvalid={isTouched && invalid}
      isValid={isTouched && isDirty && !invalid}
      feedback={(isTouched && error?.message) || undefined}
    />
  );
}
