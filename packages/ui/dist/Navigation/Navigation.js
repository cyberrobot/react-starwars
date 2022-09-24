var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { createStyles, Loader, Navbar } from '@mantine/core';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource } from 'api';
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
export function Navigation() {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');
    const currentResource = useResourceStore((state) => state.currentResource);
    const { isLoading, data } = useQuery(['resource', currentResource], () => __awaiter(this, void 0, void 0, function* () { return yield getResource({ resource: currentResource }); }));
    const links = data === null || data === void 0 ? void 0 : data.results.map((item) => (_jsx("a", Object.assign({ className: cx(classes.link, {
            [classes.linkActive]: item.name === active,
        }), href: "#", onClick: (event) => {
            event.preventDefault();
            setActive(item.name);
        } }, { children: _jsx("span", { children: item.name }) }), item.name)));
    return (_jsxs(Navbar, Object.assign({ width: { sm: 300 }, p: "md" }, { children: [isLoading && _jsx(Loader, {}), !isLoading && _jsx(Navbar.Section, Object.assign({ grow: true }, { children: links }))] })));
}
