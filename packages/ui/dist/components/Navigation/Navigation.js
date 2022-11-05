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
import { SearchField } from '../SearchField/SearchField';
import Links from './internal/Links';
import { useMatch, useNavigate } from '@tanstack/react-location';
// TODO: Fix issue with additional pages
export function Navigation() {
    const { classes } = useStyles();
    const scrollAnchorRef = useRef(null);
    const { params: { resource: currentResource }, } = useMatch();
    const [pageIndex, setPageIndex] = useState(1);
    const [resourceData, setResourceData] = useState({
        count: 0,
        next: null,
        previous: null,
        results: [],
    });
    const navigate = useNavigate();
    const { isLoading, isSuccess, data } = useQuery(['resource', currentResource, pageIndex], () => __awaiter(this, void 0, void 0, function* () { return yield getResource({ resource: `${currentResource}?page=${pageIndex}` }); }), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    const { currentResourceDetails, setCurrentResourceDetails } = useResourceStore((state) => state);
    useEffect(() => {
        setPageIndex(1);
        setResourceData({
            count: 0,
            next: null,
            previous: null,
            results: [],
        });
        setCurrentResourceDetails(null);
    }, [setCurrentResourceDetails, currentResource]);
    useEffect(() => {
        if (data) {
            setResourceData((prev) => {
                return Object.assign(Object.assign({}, data), { results: [...prev === null || prev === void 0 ? void 0 : prev.results, ...data === null || data === void 0 ? void 0 : data.results] });
            });
        }
    }, [data, pageIndex, setResourceData]);
    useEffect(() => {
        var _a;
        if (isSuccess) {
            (_a = scrollAnchorRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    }, [resourceData === null || resourceData === void 0 ? void 0 : resourceData.results.length, isSuccess]);
    const loadMoreHandler = () => {
        setPageIndex(pageIndex + 1);
    };
    const searchHandler = (data) => {
        if (data) {
            setResourceData(data);
        }
    };
    return (_jsxs(Navbar, Object.assign({ className: classes.container }, { children: [_jsx(Navbar.Section, Object.assign({ className: classes.searchContainer }, { children: _jsx(SearchField, { placeholder: `Search ${currentResource}...`, onSearch: searchHandler }) })), _jsxs(Navbar.Section, Object.assign({ className: classes.listContainer }, { children: [_jsx(Links, { data: resourceData === null || resourceData === void 0 ? void 0 : resourceData.results, resourceDetails: currentResourceDetails, onClick: setCurrentResourceDetails }), _jsx("div", { ref: scrollAnchorRef })] })), _jsx(Navbar.Section, Object.assign({ className: classes.navbarFooter }, { children: (resourceData === null || resourceData === void 0 ? void 0 : resourceData.next) !== null && (_jsx(Button, Object.assign({ onClick: loadMoreHandler, loading: isLoading }, { children: "Load more" }))) }))] })));
}
