import styles from '../styles/navbar.module.css';
import { AppShell, Burger, MantineProvider } from '@mantine/core';

export default function Navbar() {
  return (
    <AppShell.Navbar className={styles.navbar}>
      <div className={styles.nav_item}>Movies</div>
      <div className={styles.nav_item}>Rated movies</div>
    </AppShell.Navbar>
  );
}
