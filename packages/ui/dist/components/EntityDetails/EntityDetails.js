import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMatch } from '@tanstack/react-location';
import { useResourceStore } from 'store';
import { Film } from './internal/Film';
import { People } from './internal/People';
import { Planet } from './internal/Planet';
import { Specie } from './internal/Specie';
import { Starship } from './internal/Starship';
import { Vehicle } from './internal/Vehicle';
import { useStyles } from './styles';
export function EntityDetails({}) {
    const { classes } = useStyles();
    const { currentResourceDetails } = useResourceStore((state) => state);
    const { params: { resource: currentResource }, } = useMatch();
    return (_jsxs("div", Object.assign({ className: classes.page }, { children: [currentResource === 'people' && currentResourceDetails && (_jsx(People, { data: currentResourceDetails })), currentResource === 'planets' && currentResourceDetails && (_jsx(Planet, { data: currentResourceDetails })), currentResource === 'films' && currentResourceDetails && (_jsx(Film, { data: currentResourceDetails })), currentResource === 'species' && currentResourceDetails && (_jsx(Specie, { data: currentResourceDetails })), currentResource === 'vehicles' && currentResourceDetails && (_jsx(Vehicle, { data: currentResourceDetails })), currentResource === 'starships' && currentResourceDetails && (_jsx(Starship, { data: currentResourceDetails }))] })));
}
