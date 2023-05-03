import styles from '../../shared.module.scss';

export function FormWrapper(props: { children: React.ReactNode }) {
  return <div className={styles['form-wrapper']}>{props.children}</div>;
}
