import { useAlertService } from '../services';
import styles from '../shared.module.scss';
import classNames from 'classnames';

export function Alert() {
  const {
    state: { currentAlert },
  } = useAlertService();

  const messageClasses =
    currentAlert &&
    classNames(styles['alert'], styles[`alert-${currentAlert.type}`]);

  return currentAlert ? (
    <div className={messageClasses}>
      {currentAlert.title && <h4>{currentAlert.title}</h4>}
      {currentAlert.message}
    </div>
  ) : null;
}
