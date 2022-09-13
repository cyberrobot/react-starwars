import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Header, Title, MantineProvider, } from '@mantine/core';
export function AppShell({ title }) {
    return (_jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true }, { children: _jsx(MantineAppShell, Object.assign({ padding: "md", header: _jsx(Header, Object.assign({ height: 60, p: "xs", sx: {
                    display: 'flex',
                } }, { children: _jsx(Title, { children: title }) })) }, { children: _jsx("div", { children: "Hello" }) })) })));
}
