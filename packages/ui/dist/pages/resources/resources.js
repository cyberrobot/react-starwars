import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell } from '@mantine/core';
import { EntityDetails } from '../../EntityDetails/EntityDetails';
import { HeaderTabs } from '../../Header';
import { Navigation } from '../../Navigation';
export function Resources({}) {
    return (_jsx(MantineAppShell, Object.assign({ padding: 0, header: _jsx(HeaderTabs, {}), navbar: _jsx(Navigation, {}) }, { children: _jsx(EntityDetails, {}) })));
}
