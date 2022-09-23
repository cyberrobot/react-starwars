import { jsx as _jsx } from "react/jsx-runtime";
import { MantineProvider } from '@mantine/core';
import { createBrowserHistory, Outlet, ReactLocation, Router, } from '@tanstack/react-location';
import { routes } from './routes/routes';
const history = createBrowserHistory();
const location = new ReactLocation({ history });
export function AppShell({}) {
    return (_jsx(Router, Object.assign({ routes: routes, location: location }, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true }, { children: _jsx(Outlet, {}) })) })));
}
