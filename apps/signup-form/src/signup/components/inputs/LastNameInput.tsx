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
  const { trigger } = useSignupFormService();
  const {
    fieldState: { error, isTouched, isDirty, invalid },
    field: { onChange, value, onBlur },
  } = useLastNameInput();

  const handleChange = (value: string) => {
    onChange(value);
    trigger('password');
  };

  return (
    <Input
      id="last-name"
      label="Last name"
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
