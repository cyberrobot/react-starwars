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
import { useEffect, useRef, useState } from 'react';
import { Button, Navbar } from '@mantine/core';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource } from 'api';
import { useStyles } from './styles';
export function Navigation() {
    const { classes, cx } = useStyles();
    const scrollAnchorRef = useRef(null);
    const [pageIndex, setPageIndex] = useState(1);
    const [compoundData, setCompoundData] = useState([]);
    const currentResource = useResourceStore((state) => state.currentResource);
    const { isLoading, isSuccess, data } = useQuery(['resource', currentResource, pageIndex], () => __awaiter(this, void 0, void 0, function* () { return yield getResource({ resource: `${currentResource}?page=${pageIndex}` }); }));
    const { currentResourceDetails, setCurrentResourceDetails } = useResourceStore((state) => state);
    useEffect(() => {
        setCurrentResourceDetails(null);
    }, [setCurrentResourceDetails, currentResource]);
    useEffect(() => {
        if (data) {
            setCompoundData((prev) => [...prev, ...data === null || data === void 0 ? void 0 : data.results]);
        }
    }, [data, setCompoundData, pageIndex, isSuccess]);
    useEffect(() => {
        var _a;
        if (isSuccess) {
            (_a = scrollAnchorRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    }, [compoundData.length, isSuccess]);
    const links = compoundData.map((item, index) => {
        const name = 'name' in item ? item.name : item.title;
        return (_jsx("a", Object.assign({ className: cx(classes.link, {
                [classes.linkActive]: name === (currentResourceDetails === null || currentResourceDetails === void 0 ? void 0 : currentResourceDetails.name) ||
                    name === (currentResourceDetails === null || currentResourceDetails === void 0 ? void 0 : currentResourceDetails.title),
            }), href: "", onClick: (event) => {
                event.preventDefault();
                setCurrentResourceDetails(item);
            } }, { children: _jsx("span", { children: name }) }), name));
    });
    const loadMoreHandler = () => {
        setPageIndex(pageIndex + 1);
    };
    return (_jsxs(Navbar, Object.assign({ className: classes.container }, { children: [_jsxs(Navbar.Section, Object.assign({ className: classes.listContainer }, { children: [links, _jsx("div", { ref: scrollAnchorRef })] })), _jsx(Navbar.Section, Object.assign({ className: classes.navbarFooter }, { children: _jsx(Button, Object.assign({ onClick: loadMoreHandler, loading: isLoading, disabled: (data === null || data === void 0 ? void 0 : data.next) === null }, { children: "Load more" })) }))] })));
}
