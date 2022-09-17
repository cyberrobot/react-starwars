import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { createStyles, Navbar } from '@mantine/core';
const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        link: Object.assign(Object.assign({}, theme.fn.focusStyles()), { display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: theme.fontSizes.sm, color: theme.colorScheme === 'dark'
                ? theme.colors.dark[1]
                : theme.colors.gray[7], padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`, borderRadius: theme.radius.sm, fontWeight: 500, '&:hover': {
                backgroundColor: theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            } }),
        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({
                    variant: 'light',
                    color: theme.primaryColor,
                }).background,
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
                    .color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({
                        variant: 'light',
                        color: theme.primaryColor,
                    }).color,
                },
            },
        },
    };
});
const data = [
    { link: '', label: 'Notifications' },
    { link: '', label: 'Billing' },
    { link: '', label: 'Security' },
    { link: '', label: 'SSH Keys' },
    { link: '', label: 'Databases' },
    { link: '', label: 'Authentication' },
    { link: '', label: 'Other Settings' },
];
export function Navigation() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');
    const links = data.map((item) => (_jsx("a", Object.assign({ className: cx(classes.link, {
            [classes.linkActive]: item.label === active,
        }), href: item.link, onClick: (event) => {
            event.preventDefault();
            setActive(item.label);
        } }, { children: _jsx("span", { children: item.label }) }), item.label)));
    return (_jsx(Navbar, Object.assign({ width: { sm: 300 }, p: "md" }, { children: _jsx(Navbar.Section, Object.assign({ grow: true }, { children: links })) })));
}
