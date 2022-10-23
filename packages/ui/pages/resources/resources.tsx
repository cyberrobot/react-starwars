import { AppShell as MantineAppShell } from '@mantine/core';
import { EntityDetails } from '../../components/EntityDetails/EntityDetails';
import { HeaderTabs } from '../../components/Header';
import { Navigation } from '../../components/Navigation';

type ResourcesProps = {};

export function Resources({}: ResourcesProps) {
  return (
    <MantineAppShell
      padding={0}
      header={<HeaderTabs />}
      navbar={<Navigation />}
    >
      <EntityDetails />
    </MantineAppShell>
  );
}
