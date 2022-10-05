import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useResourceStore } from 'store';
import { People } from './internal/People';
export function EntityDetails({}) {
    const { currentResource, currentResourceDetails } = useResourceStore((state) => state);
    return (_jsx(_Fragment, { children: currentResource === 'people' && currentResourceDetails && (_jsx(People, { data: currentResourceDetails })) }));
}
