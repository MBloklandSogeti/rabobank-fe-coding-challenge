import { SignupService } from './services';
import { SignupForm } from './components';
import { Alert, AlertService } from '../shared';

export function Signup() {
  return (
    <AlertService>
      <SignupService>
        <Alert />
        <SignupForm />
      </SignupService>
    </AlertService>
  );
}
