import { AppShell as MantineAppShell } from '@mantine/core';
import { HeaderTabs } from '../../Header';
import { Navigation } from '../../Navigation';

type PeopleProps = {};

export function People({}: PeopleProps) {
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
