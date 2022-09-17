import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell as MantineAppShell, MantineProvider, } from '@mantine/core';
import { HeaderTabs } from './Header/Header';
import { createBrowserHistory, Outlet, ReactLocation, Router, } from '@tanstack/react-location';
import { routes } from './routes/routes';
const history = createBrowserHistory();
const location = new ReactLocation({ history });
export function AppShell({ title }) {
    return (_jsx(Router, Object.assign({ routes: routes, location: location }, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true }, { children: _jsxs(MantineAppShell, Object.assign({ padding: 0 }, { children: [_jsx(HeaderTabs, { tabs: ['Home', 'People', 'Planets', 'Starships'] }), _jsx(Outlet, {})] })) })) })));
}
