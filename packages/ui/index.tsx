import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
} from '@mantine/core';
import { HeaderTabs } from './Header/Header';
import {
  createBrowserHistory,
  Outlet,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { routes } from './routes/routes';

const history = createBrowserHistory();
const location = new ReactLocation({ history });
export interface AppShellProps {
  title: string;
}

export function AppShell({ title }: AppShellProps) {
  return (
    <Router routes={routes} location={location}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MantineAppShell padding={0}>
          <HeaderTabs tabs={['Home', 'People', 'Planets', 'Starships']} />
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </Router>
  );
}
