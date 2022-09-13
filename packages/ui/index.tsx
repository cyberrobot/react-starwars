import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
} from '@mantine/core';
export interface AppShellProps {
  title: string;
}

export function AppShell({ title }: AppShellProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MantineAppShell
        padding="md"
        header={
          <Header
            height={60}
            p="xs"
            sx={{
              display: 'flex',
            }}
          >
            <Title>{title}</Title>
          </Header>
        }
      >
        <div>Hello</div>
      </MantineAppShell>
    </MantineProvider>
  );
}
