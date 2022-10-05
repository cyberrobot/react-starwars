import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useResourceStore } from 'store';
import { People } from './internal/People';
import { Planet } from './internal/Planet';
export function EntityDetails({}) {
    const { currentResource, currentResourceDetails } = useResourceStore((state) => state);
    return (_jsxs(_Fragment, { children: [currentResource === 'people' && currentResourceDetails && (_jsx(People, { data: currentResourceDetails })), currentResource === 'planets' && currentResourceDetails && (_jsx(Planet, { data: currentResourceDetails }))] }));
}
