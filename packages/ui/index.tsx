import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
} from '@mantine/core';
import { HeaderTabs } from './Header/Header';
export interface AppShellProps {
  title: string;
}

export function AppShell({ title }: AppShellProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MantineAppShell padding={0}>
        <HeaderTabs tabs={['Home', 'People', 'Planets', 'Starships']} />
      </MantineAppShell>
    </MantineProvider>
  );
}
