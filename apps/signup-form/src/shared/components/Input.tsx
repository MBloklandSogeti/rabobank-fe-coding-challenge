import classNames from 'classnames';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  isValid?: boolean;
  isInvalid?: boolean;
  feedback?: string;
};

export function Input({
  label,
  isValid,
  isInvalid,
  feedback,
  ...inputProps
}: InputProps) {
  const inputClasses = classNames('form-control', {
    'is-valid': isValid,
    'is-invalid': isInvalid,
  });

  const feedbackClasses = classNames({
    'valid-feedback': isValid,
    'invalid-feedback': isInvalid,
  });

  return (
    <div>
      {label && (
        <label className="form-label" htmlFor={inputProps.id}>
          {label}
        </label>
      )}
      <input {...inputProps} className={inputClasses} />
      {feedback && <div className={feedbackClasses}>{feedback}</div>}
    </div>
  );
}
