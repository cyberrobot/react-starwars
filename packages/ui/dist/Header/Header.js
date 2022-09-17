import { jsx as _jsx } from "react/jsx-runtime";
import { createStyles, Tabs, Header } from '@mantine/core';
import { useNavigate } from '@tanstack/react-location';
const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        paddingLeft: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
    },
    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    tabsList: {
        borderBottom: '0 !important',
    },
    tab: {
        fontWeight: 500,
        height: 38,
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
        },
        '&[data-active]': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            borderColor: theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[2],
        },
    },
}));
export function HeaderTabs({ tabs }) {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const items = tabs.map((tab) => (_jsx(Tabs.Tab, Object.assign({ value: tab, onClick: () => navigate({ to: tab.toLowerCase() === 'home' ? '/' : tab.toLowerCase() }) }, { children: tab }), tab)));
    return (_jsx(Header, Object.assign({ height: 50, className: classes.header }, { children: _jsx(Tabs, Object.assign({ defaultValue: "Home", variant: "outline", classNames: {
                root: classes.tabs,
                tabsList: classes.tabsList,
                tab: classes.tab,
            } }, { children: _jsx(Tabs.List, { children: items }) })) })));
}
