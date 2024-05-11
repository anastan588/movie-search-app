'use client';
import '@mantine/core/styles.css';
import { AppShell, Burger, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/componets/header';
import Footer from '@/componets/footer';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  console.log([opened, { toggle }]);
  return (
    <MantineProvider>
      <AppShell
        navbar={{
          width: 232,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        {/* <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Header>
        <AppShell.Navbar>Navbar</AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main> */}
        <div className="main_container container">
          <Header opened={opened} toggle={{ toggle }} />
          <Footer />
        </div>
      </AppShell>
    </MantineProvider>
  );
}
