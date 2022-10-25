import { TextInputProps as MantineInputProps } from '@mantine/core';
import React from 'react';
import { Entity } from 'api';
import { Resource } from 'api/dist/data/get-resource/get-resource';
export declare const SearchField: React.ForwardRefExoticComponent<Omit<MantineInputProps, "onChange"> & {
    onSearch?: ((data: Resource<Entity> | undefined) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=SearchField.d.ts.map