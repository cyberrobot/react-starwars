import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SimpleGrid, Stack } from '@mantine/core';
import { useStyles } from '../styles';
export function Film({ data }) {
    const { classes } = useStyles();
    return (_jsxs(SimpleGrid, Object.assign({ cols: 2, className: classes.container }, { children: [_jsxs(Stack, Object.assign({ className: classes.descriptionTermList }, { children: [_jsx("div", { children: "Title" }), _jsx("div", { children: "Director" }), _jsx("div", { children: "Producer" }), _jsx("div", { children: "Release date" })] })), _jsxs(Stack, Object.assign({ className: classes.descriptionDetailsList }, { children: [_jsx("div", { children: data === null || data === void 0 ? void 0 : data.title }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.director }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.producer }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.release_date })] }))] })));
}
