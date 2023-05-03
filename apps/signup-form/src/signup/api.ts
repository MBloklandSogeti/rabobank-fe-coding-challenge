import Axios from 'axios';
import { SignupForm } from './types';

export async function postSignupForm(
  form: SignupForm,
  abortSignal: AbortSignal
) {
  return Axios.post<SignupForm>('https://demo-api.now.sh/users', form, {
    signal: abortSignal,
  }).then((res) => (res.status === 200 ? res.data : Promise.reject()));
}
