import { vi } from 'vitest';
import { act, renderHook } from '@testing-library/react-hooks';
import * as Api from '../api';
import { useSignup } from './useSignup';
import { SignupForm } from '../types';

describe('useSignup', () => {
  it('should return state and signup fn', () => {
    const postSignupFormSpy = vi.spyOn(Api, 'postSignupForm');
    postSignupFormSpy.mockImplementationOnce(async (form, abort) => {
      return Promise.resolve(form);
    });

    const expectedForm: SignupForm = {
      firstName: 'John',
      lastName: 'Doe',
      password: 'test123Test',
      email: 'john@doe.com',
    };

    const { result } = renderHook(() => useSignup());

    act(() => {
      result.current.signup(expectedForm);
    });

    expect(result.current).toHaveProperty('state');
    expect(result.current).toHaveProperty('signup');

    expect(result.current.state.submitting).toBeTruthy();

    expect(postSignupFormSpy.mock.results[0].value).resolves.toMatchObject(
      expectedForm
    );
  });
});
