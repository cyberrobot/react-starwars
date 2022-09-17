import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles, Container, Tabs } from '@mantine/core';
import { StarWars } from '../Icons';
const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },
    header: {
        backgroundColor: theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
        marginBottom: 20,
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
    return (_jsx("div", Object.assign({ className: classes.header }, { children: _jsxs(Container, Object.assign({ className: classes.inner }, { children: [_jsx(StarWars, {}), _jsx(Tabs, Object.assign({ defaultValue: "Home", variant: "outline", classNames: {
                        root: classes.tabs,
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    } }, { children: _jsx(Tabs.List, { children: items }) }))] })) })));
}
