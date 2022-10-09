import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SimpleGrid, Stack } from '@mantine/core';
import { useStyles } from '../styles';
export function Vehicle({ data }) {
    const { classes } = useStyles();
    return (_jsxs(SimpleGrid, Object.assign({ cols: 2, className: classes.container }, { children: [_jsxs(Stack, Object.assign({ className: classes.descriptionTermList }, { children: [_jsx("div", { children: "Name" }), _jsx("div", { children: "Model" }), _jsx("div", { children: "Manufacturer" }), _jsx("div", { children: "Cargo capacity" }), _jsx("div", { children: "Consumables" }), _jsx("div", { children: "Cost in credits" }), _jsx("div", { children: "Crew" }), _jsx("div", { children: "Length" }), _jsx("div", { children: "Max atmosphering speed" }), _jsx("div", { children: "Passengers" }), _jsx("div", { children: "Vehicle class" })] })), _jsxs(Stack, Object.assign({ className: classes.descriptionDetailsList }, { children: [_jsx("div", { children: data === null || data === void 0 ? void 0 : data.name }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.model }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.manufacturer }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.cargo_capacity }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.consumables }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.cost_in_credits }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.crew }), _jsx("div", Object.assign({ className: classes.number }, { children: `${data === null || data === void 0 ? void 0 : data.length} meters` })), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.max_atmosphering_speed }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.passengers }), _jsx("div", { children: data === null || data === void 0 ? void 0 : data.vehicle_class })] }))] })));
}
