import styles from '../../shared.module.scss';

export function FormInputsWrapper(props: { children: React.ReactNode }) {
  return <div className={styles['inputs']}>{props.children}</div>;
}
