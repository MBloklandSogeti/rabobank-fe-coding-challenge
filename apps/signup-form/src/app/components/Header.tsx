import styles from '../app.module.scss';
import Logo from '../../assets/rabobank.svg';

export function Header() {
  return (
    <header className={styles['header'] + ' container-fluid'}>
      <a href="https://www.rabobank.nl/particulieren">
        <img className={styles['logo']} src={Logo} alt="Rabobank" />
      </a>
      <h1>Signup</h1>
      <div></div>
    </header>
  );
}
