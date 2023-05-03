import {
  FormWrapper,
  FormActionsWrapper,
  FormInputsWrapper,
  SpinnerButton,
} from '../../shared';
import { SignupFormService, useSignupService } from '../services';
import {
  EmailInput,
  FirstNameInput,
  LastNameInput,
  PasswordInput,
} from './inputs';

export function SignupForm() {
  const {
    state: { submitting },
  } = useSignupService();

  return (
    <SignupFormService>
      <FormWrapper>
        <FormInputsWrapper>
          <FirstNameInput />
          <LastNameInput />
          <PasswordInput />
          <EmailInput />
        </FormInputsWrapper>
        <FormActionsWrapper>
          <SpinnerButton
            spin={submitting}
            disabled={submitting}
            className="btn btn-primary"
            type="submit"
          >
            Register
          </SpinnerButton>
        </FormActionsWrapper>
      </FormWrapper>
    </SignupFormService>
  );
}
