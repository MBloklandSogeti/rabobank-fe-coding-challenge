import { SignupService } from './services';
import { SignupForm } from './components';

export function Signup() {
  return (
    <SignupService>
      <SignupForm />
    </SignupService>
  );
}
