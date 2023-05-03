import classNames from 'classnames';
import styles from '../app.module.scss';

export function Main(props: { children: React.ReactNode }) {
  return (
    <main className={classNames(styles['main'], 'container-fluid')}>
      {props.children}
    </main>
  );
}
