import { AppShell as MantineAppShell } from '@mantine/core';
import { HeaderTabs } from '../../Header';
import { Navigation } from '../../Navigation';

type ResourcesProps = {};

export function Resources({}: ResourcesProps) {
  return (
    <MantineAppShell
      padding={0}
      header={<HeaderTabs />}
      navbar={<Navigation />}
    >
      Hello
    </MantineAppShell>
  );
}
