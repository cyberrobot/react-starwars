import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from '@tanstack/react-location';
import { useResourceStore } from 'store';
import { useStyles } from '../styles';
export default function Links({ data }) {
    const { classes, cx } = useStyles();
    const navigate = useNavigate();
    const { currentResourceDetails, setCurrentResourceDetails } = useResourceStore((state) => state);
    return (_jsx(_Fragment, { children: data === null || data === void 0 ? void 0 : data.map((item, index) => {
            const name = 'name' in item ? item.name : item.title;
            return (_jsx("a", Object.assign({ className: cx(classes.link, {
                    [classes.linkActive]: name === (currentResourceDetails === null || currentResourceDetails === void 0 ? void 0 : currentResourceDetails.name) ||
                        name === (currentResourceDetails === null || currentResourceDetails === void 0 ? void 0 : currentResourceDetails.title),
                }), href: "", onClick: (event) => {
                    event.preventDefault();
                    setCurrentResourceDetails(item);
                    navigate({ to: `./${index + 1}` });
                } }, { children: _jsx("span", { children: name }) }), name));
        }) }));
}
