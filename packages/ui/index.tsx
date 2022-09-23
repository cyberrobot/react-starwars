import { MantineProvider } from '@mantine/core';
import {
  createBrowserHistory,
  Outlet,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './routes/routes';

const history = createBrowserHistory();
const location = new ReactLocation({ history });
const queryClient = new QueryClient();

export interface AppShellProps {}

export function AppShell({}: AppShellProps) {
  return (
    <Router routes={routes} location={location}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </MantineProvider>
    </Router>
  );
}
