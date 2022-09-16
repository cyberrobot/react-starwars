import { jsx as _jsx } from "react/jsx-runtime";
import { createStyles, Container, Tabs } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
        marginBottom: 120,
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
    const items = tabs.map((tab) => (_jsx(Tabs.Tab, Object.assign({ value: tab }, { children: tab }), tab)));
    return (_jsx("div", Object.assign({ className: classes.header }, { children: _jsx(Container, { children: _jsx(Tabs, Object.assign({ defaultValue: "Home", variant: "outline", classNames: {
                    root: classes.tabs,
                    tabsList: classes.tabsList,
                    tab: classes.tab,
                } }, { children: _jsx(Tabs.List, { children: items }) })) }) })));
}
