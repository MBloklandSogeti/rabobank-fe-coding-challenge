type SpinnerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  spin?: boolean;
  children?: React.ReactNode;
};

export function SpinnerButton({
  spin,
  children,
  ...btnProps
}: SpinnerButtonProps) {
  return (
    <button {...btnProps}>
      {!spin && children}
      {spin && (
        <span className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </span>
      )}
    </button>
  );
}
