'use client';
import '@mantine/core/styles.css';
import { AppShell, Burger, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/componets/header';
import styles from '../styles/commonLayout.module.css';

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      navbar={{
        width: 232,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <Header opened={opened} toggle={{ toggle }} />
    </AppShell>
  );
}
