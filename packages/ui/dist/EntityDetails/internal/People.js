import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SimpleGrid, Stack } from '@mantine/core';
import { useStyles } from '../styles';
export function People({ data }) {
    const { classes } = useStyles();
    return (_jsxs(SimpleGrid, Object.assign({ cols: 2, className: classes.container }, { children: [_jsxs(Stack, Object.assign({ className: classes.descriptionTermList }, { children: [_jsx("div", { children: "Name" }), _jsx("div", { children: "Height" }), _jsx("div", { children: "Mass" }), _jsx("div", { children: "Hair color" }), _jsx("div", { children: "Gender" }), _jsx("div", { children: "Birth year" })] })), _jsxs(Stack, Object.assign({ className: classes.descriptionDetailsList }, { children: [_jsx("div", { children: data === null || data === void 0 ? void 0 : data.name }), _jsx("div", { children: (data === null || data === void 0 ? void 0 : data.height) +
                            'cm ' +
                            `(${(Number(data === null || data === void 0 ? void 0 : data.height) * 0.0328084).toFixed(2)}ft)` }), _jsx("div", { children: (data === null || data === void 0 ? void 0 : data.mass) + 'kg' }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.hair_color }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.gender }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.birth_year })] }))] })));
}
