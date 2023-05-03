import { useController } from 'react-hook-form';
import { Input } from '../../../shared';
import { SignupForm } from '../../types';

export function usePasswordInput() {
  const controller = useController<SignupForm>({
    name: 'password',
    defaultValue: '',
    rules: {
      required: 'Password is a required field.',
    },
  });

  return controller;
}

export function PasswordInput() {
  const {
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = usePasswordInput();

  return (
    <Input
      id="password"
      label="Password"
      value={value}
      type="password"
      autoComplete="current-password"
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      isInvalid={isTouched && invalid}
      isValid={isTouched && isDirty && !invalid}
      feedback={(isTouched && error?.message) || undefined}
    />
  );
}
