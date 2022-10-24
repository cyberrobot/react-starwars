import { TextInput, InputProps as MantineInputProps } from '@mantine/core';
import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { useDebouncedValue } from '@mantine/hooks';

type InputProps = MantineInputProps & {
  onChange?: (value: string) => void;
};

export const SearchField = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { onChange, ...rest } = props;
    const [value, setValue] = useState('');
    const [debouncedSearch] = useDebouncedValue(value, 200);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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

    return (
      <TextInput
        {...inputProps}
        {...rest}
        ref={ref}
      />
    );
  },
);

SearchField.displayName = ' SearchField';
