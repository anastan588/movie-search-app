import styles from '../styles/header.module.css';
import { AppShell, Burger} from '@mantine/core';
import Image from 'next/image';
import Navbar from './navbar';

interface HeaderProps {
  opened: boolean;
  toggle: {toggle: 
    () => void;}
}

export default function Header(props: HeaderProps) {
  const { opened, toggle } = props;
  return (
    <header className={styles.header}>
      <div className={styles.logo_block}>
        <Image
          className={styles.logo_image}
          src="/logo.svg"
          alt="logo"
          width={32}
          height={32}
        />
        <h1 className={styles.logo_title}>ArrowFlicks</h1>
      </div>
      <Burger opened={opened} onClick={toggle.toggle} hiddenFrom="sm" />
      <Navbar></Navbar>
    </header>
  );
}
