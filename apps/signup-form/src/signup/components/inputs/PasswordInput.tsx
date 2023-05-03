import { useController } from 'react-hook-form';
import { Input } from '../../../shared';
import { SignupForm } from '../../types';
import { useSignupFormService } from '../../services';

export function usePasswordInput() {
  const { watch } = useSignupFormService();

  const firstName = watch().firstName;
  const lastName = watch().lastName;

  const controller = useController<SignupForm>({
    name: 'password',
    defaultValue: '',
    rules: {
      required: 'Password is a required field.',
      validate: {
        containsUppercase: (passwordValue: string) => {
          const matches = passwordValue.match(/(.*[A-Z].*)/g);

          return (
            !!(matches && matches.length > 0) ||
            'Password should contain at least 1 uppercase letter.'
          );
        },
        containsLowercase: (passwordValue: string) => {
          const matches = passwordValue.match(/(.*[a-z].*)/g);

          return (
            !!(matches && matches.length > 0) ||
            'Password should contain at least 1 lowercase letter.'
          );
        },
        minimumLength: (passwordValue: string) => {
          return (
            passwordValue.length >= 8 ||
            'Password should be at least 8 characters long.'
          );
        },
        notFirstOrLastName: (passwordValue: string) => {
          const passwordValueLowercase = passwordValue.toLowerCase();

          return (
            (!passwordValueLowercase.includes(firstName.toLowerCase()) &&
              !passwordValueLowercase.includes(lastName.toLowerCase())) ||
            'Password should not contain the given first or last name.'
          );
        },
      },
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
