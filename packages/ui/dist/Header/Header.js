var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createStyles, Tabs, Header } from '@mantine/core';
import { useNavigate } from '@tanstack/react-location';
import { useQuery } from '@tanstack/react-query';
import { getResources } from 'api';
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
export function HeaderTabs({}) {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const { data } = useQuery(['resources'], () => __awaiter(this, void 0, void 0, function* () { return yield getResources(); }));
    let resources = [];
    if (data) {
        resources = Object.keys(data).map((item) => item.charAt(0).toUpperCase() + item.slice(1));
    }
    const tabs = ['Home', ...resources];
    const items = tabs.map((tab) => (_jsx(Tabs.Tab, Object.assign({ value: tab, onClick: () => navigate({
            to: tab.toLowerCase() === 'home' ? '/' : `/${tab.toLowerCase()}`,
        }) }, { children: tab }), tab)));
    return (_jsx(Header, Object.assign({ height: 50, className: classes.header }, { children: _jsx(Tabs, Object.assign({ defaultValue: "Home", variant: "outline", classNames: {
                root: classes.tabs,
                tabsList: classes.tabsList,
                tab: classes.tab,
            } }, { children: _jsx(Tabs.List, { children: items }) })) })));
}
