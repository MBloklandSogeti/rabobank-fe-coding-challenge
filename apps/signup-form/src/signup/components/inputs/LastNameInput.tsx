import { useController } from 'react-hook-form';
import { Input } from '../../../shared';
import { SignupForm } from '../../types';
import { useSignupFormService } from '../../services';

export function useLastNameInput() {
  const controller = useController<SignupForm>({
    name: 'lastName',
    defaultValue: '',
    rules: {
      required: 'Last name is a required field.',
    },
  });

  return controller;
}

export function LastNameInput() {
  const {
    formState: { isSubmitted },
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = useLastNameInput();

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <Input
      id="last-name"
      label="Last name"
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
