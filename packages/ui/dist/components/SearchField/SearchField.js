var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { TextInput, Loader, } from '@mantine/core';
import { forwardRef, useEffect, useState, } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { getResource } from 'api';
export const SearchField = forwardRef((props, ref) => {
    const { onSearch } = props, rest = __rest(props, ["onSearch"]);
    const [value, setValue] = useState('');
    const [debouncedSearch] = useDebouncedValue(value, 450);
    const onChangeHandler = (event) => {
        setValue(event.currentTarget.value);
    };
    const inputProps = {
        value: value,
        onChange: onChangeHandler,
    };
    const currentResource = useResourceStore((state) => state.currentResource);
    const { isFetching, data } = useQuery(['resourceSearch', currentResource, debouncedSearch], () => __awaiter(void 0, void 0, void 0, function* () {
        return yield getResource({
            resource: `${currentResource}?search=${debouncedSearch}`,
        });
    }), {
        enabled: debouncedSearch.length > 0,
    });
    useEffect(() => {
        if (typeof onSearch === 'function') {
            onSearch(data === null || data === void 0 ? void 0 : data.results);
        }
    }, [data === null || data === void 0 ? void 0 : data.results, onSearch]);
    return (_jsx(TextInput, Object.assign({}, inputProps, rest, { ref: ref, rightSection: isFetching && _jsx(Loader, { size: "xs" }) })));
});
SearchField.displayName = ' SearchField';
