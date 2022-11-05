import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell } from '@mantine/core';
import { useMatch } from '@tanstack/react-location';
import { EntityDetails } from '../../components/EntityDetails/EntityDetails';
import { HeaderTabs } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
export function Resources({}) {
    const { params: { resource }, } = useMatch();
    console.log(resource);
    return (_jsx(MantineAppShell, Object.assign({ padding: 0, header: _jsx(HeaderTabs, {}), navbar: _jsx(Navigation, {}) }, { children: _jsx(EntityDetails, {}) })));
}
