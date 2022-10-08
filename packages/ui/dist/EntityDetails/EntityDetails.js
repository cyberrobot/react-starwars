import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useResourceStore } from 'store';
import { Film } from './internal/Film';
import { People } from './internal/People';
import { Planet } from './internal/Planet';
import { Specie } from './internal/Specie';
export function EntityDetails({}) {
    const { currentResource, currentResourceDetails } = useResourceStore((state) => state);
    return (_jsxs(_Fragment, { children: [currentResource === 'people' && currentResourceDetails && (_jsx(People, { data: currentResourceDetails })), currentResource === 'planets' && currentResourceDetails && (_jsx(Planet, { data: currentResourceDetails })), currentResource === 'films' && currentResourceDetails && (_jsx(Film, { data: currentResourceDetails })), currentResource === 'species' && currentResourceDetails && (_jsx(Specie, { data: currentResourceDetails }))] }));
}
