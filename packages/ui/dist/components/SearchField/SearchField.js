var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { TextInput } from '@mantine/core';
import { forwardRef, useEffect, useState, } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
export const SearchField = forwardRef((props, ref) => {
    const { onChange } = props, rest = __rest(props, ["onChange"]);
    const [value, setValue] = useState('');
    const [debouncedSearch] = useDebouncedValue(value, 200);
    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };
    const inputProps = {
        value: value,
        onChange: onChangeHandler,
    };
    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(debouncedSearch);
        }
    }, [debouncedSearch, onChange]);
    return (_jsx(TextInput, Object.assign({}, inputProps, rest, { ref: ref })));
});
SearchField.displayName = ' SearchField';
