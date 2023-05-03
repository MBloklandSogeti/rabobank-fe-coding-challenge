import { useController } from 'react-hook-form';
import { Input } from '../../../shared';
import { SignupForm } from '../../types';

export function useEmailInput() {
  const controller = useController<SignupForm>({
    name: 'email',
    defaultValue: '',
    rules: {
      required: 'E-mail is a required field.',
      validate: {
        regex: (emailValue: string) => {
          const matches = emailValue.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

          return matches && matches.length > 0
            ? true
            : 'E-mail is not valid. Should be in the format: example@example.nl';
        },
      },
    },
  });

  return controller;
}

export function EmailInput() {
  const {
    formState: { isSubmitted },
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = useEmailInput();

  return (
    <Input
      id="email"
      label="E-mail"
      value={value}
      type="text"
      autoComplete="email"
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      isInvalid={(isTouched || isSubmitted) && invalid}
      isValid={(isTouched || isSubmitted) && isDirty && !invalid}
      feedback={((isTouched || isSubmitted) && error?.message) || undefined}
    />
  );
}
