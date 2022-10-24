import { TextInputProps as MantineInputProps } from '@mantine/core';
import React from 'react';
import { Entity } from 'api';
export declare const SearchField: React.ForwardRefExoticComponent<Omit<MantineInputProps, "onChange"> & {
    onSearch?: ((data: Entity[] | undefined) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=SearchField.d.ts.map