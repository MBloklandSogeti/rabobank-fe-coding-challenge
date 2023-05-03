import styles from '../../shared.module.scss';

export function FormActionsWrapper(props: { children: React.ReactNode }) {
  return <div className={styles['actions']}>{props.children}</div>;
}
