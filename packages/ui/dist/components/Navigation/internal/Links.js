import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useStyles } from '../styles';
export default function Links({ data, resourceDetails, onClick }) {
    const { classes, cx } = useStyles();
    return (_jsx(_Fragment, { children: data.map((item, index) => {
            const name = 'name' in item ? item.name : item.title;
            return (_jsx("a", Object.assign({ className: cx(classes.link, {
                    [classes.linkActive]: name === (resourceDetails === null || resourceDetails === void 0 ? void 0 : resourceDetails.name) ||
                        name === (resourceDetails === null || resourceDetails === void 0 ? void 0 : resourceDetails.title),
                }), href: "", onClick: (event) => {
                    event.preventDefault();
                    if (typeof onClick === 'function') {
                        onClick(item);
                    }
                } }, { children: _jsx("span", { children: name }) }), name));
        }) }));
}
