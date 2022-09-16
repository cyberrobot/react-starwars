import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, MantineProvider, } from '@mantine/core';
import { HeaderTabs } from './Header/Header';
export function AppShell({ title }) {
    return (_jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true }, { children: _jsx(MantineAppShell, Object.assign({ padding: 0 }, { children: _jsx(HeaderTabs, { tabs: ['Home', 'People', 'Planets', 'Starships'] }) })) })));
}
