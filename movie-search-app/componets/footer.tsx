import styles from '../styles/footer.module.css';
import { AppShell, Burger, MantineProvider } from '@mantine/core';

export default function Footer() {
  return (
      <AppShell.Footer className={styles.footer}>
      </AppShell.Footer>
  );
}