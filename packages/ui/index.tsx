import { MantineProvider } from '@mantine/core';
import {
  createBrowserHistory,
  Outlet,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { routes } from './routes/routes';

const history = createBrowserHistory();
const location = new ReactLocation({ history });
export interface AppShellProps {}

export function AppShell({}: AppShellProps) {
  return (
    <Router routes={routes} location={location}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Outlet />
      </MantineProvider>
    </Router>
  );
}
