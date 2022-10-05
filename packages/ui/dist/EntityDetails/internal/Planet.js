import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SimpleGrid, Stack } from '@mantine/core';
import { useStyles } from '../styles';
export function Planet({ data }) {
    const { classes } = useStyles();
    return (_jsxs(SimpleGrid, Object.assign({ cols: 2, className: classes.container }, { children: [_jsxs(Stack, Object.assign({ className: classes.descriptionTermList }, { children: [_jsx("div", { children: "Climate" }), _jsx("div", { children: "Diameter" }), _jsx("div", { children: "Gravity" }), _jsx("div", { children: "Terrain" }), _jsx("div", { children: "Population" })] })), _jsxs(Stack, Object.assign({ className: classes.descriptionDetailsList }, { children: [_jsx("div", { children: data === null || data === void 0 ? void 0 : data.climate }), _jsx("div", { children: (data === null || data === void 0 ? void 0 : data.diameter) +
                            ' Kilometers ' +
                            `(${(Number(data === null || data === void 0 ? void 0 : data.diameter) / 1.6).toFixed(0)} Miles)` }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.gravity }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.terrain }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.population })] }))] })));
}
