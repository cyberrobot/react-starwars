import { AppShell as MantineAppShell, MantineProvider } from '@mantine/core';
import { HeaderTabs } from './Header';
import {
  createBrowserHistory,
  Outlet,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { routes } from './routes/routes';
import { Navigation } from './Navigation';

const history = createBrowserHistory();
const location = new ReactLocation({ history });
export interface AppShellProps {
  title: string;
}

export function AppShell({ title }: AppShellProps) {
  return (
    <Router routes={routes} location={location}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MantineAppShell
          padding={0}
          header={
            <HeaderTabs tabs={['Home', 'People', 'Planets', 'Starships']} />
          }
          navbar={<Navigation />}
        >
          Hello
        </MantineAppShell>
      </MantineProvider>
    </Router>
  );
}
