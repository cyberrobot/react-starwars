import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, MantineProvider } from '@mantine/core';
import { HeaderTabs } from './Header';
import { createBrowserHistory, ReactLocation, Router, } from '@tanstack/react-location';
import { routes } from './routes/routes';
import { Navigation } from './Navigation';
const history = createBrowserHistory();
const location = new ReactLocation({ history });
export function AppShell({ title }) {
    return (_jsx(Router, Object.assign({ routes: routes, location: location }, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true }, { children: _jsx(MantineAppShell, Object.assign({ padding: 0, header: _jsx(HeaderTabs, { tabs: ['Home', 'People', 'Planets', 'Starships'] }), navbar: _jsx(Navigation, {}) }, { children: "Hello" })) })) })));
}
