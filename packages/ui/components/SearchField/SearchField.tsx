import {
  TextInput,
  TextInputProps as MantineInputProps,
  Loader,
} from '@mantine/core';
import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { useResourceStore } from 'store';
import { useQuery } from '@tanstack/react-query';
import { Entity, getResource } from 'api';
import { Resource } from 'api/dist/data/get-resource/get-resource';

type InputProps = Omit<MantineInputProps, 'onChange'> & {
  onSearch?: (data: Resource<Entity> | undefined) => void;
};

export const SearchField = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { onSearch, ...rest } = props;
    const [value, setValue] = useState('');
    const [debouncedSearch] = useDebouncedValue(value, 450);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    };
    const inputProps = {
      value: value,
      onChange: onChangeHandler,
    };
    const currentResource = useResourceStore((state) => state.currentResource);
    const { isFetching, data } = useQuery(
      ['resourceSearch', currentResource, debouncedSearch],
      async () =>
        await getResource({
          resource: `${currentResource}?search=${debouncedSearch}`,
        }),
      {
        enabled: debouncedSearch.length > 0,
      },
    );

    useEffect(() => {
      if (typeof onSearch === 'function') {
        onSearch(data);
      }
    }, [data, onSearch]);

    return (
      <TextInput
        {...inputProps}
        {...rest}
        ref={ref}
        rightSection={isFetching && <Loader size="xs" />}
      />
    );
  },
);

SearchField.displayName = ' SearchField';
