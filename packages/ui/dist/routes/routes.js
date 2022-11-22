import { jsx as _jsx } from "react/jsx-runtime";
import { Resources } from '../pages/resources';
export const routes = [
    {
        path: ':resource',
        element: _jsx(Resources, {}),
        children: [
            {
                path: ':id',
                element: _jsx(Resources, {}),
            },
        ],
    },
];
