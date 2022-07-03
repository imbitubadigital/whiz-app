import React, {ForwardedRef, forwardRef} from 'react';
import {TextInput} from 'react-native';
import {useTheme} from 'styled-components';
import {InputProps} from './interfaces';
import {Controller} from 'react-hook-form';
import {Error} from '@components/Error';

import * as S from './styles';

function InputContainer(
  {
    erro = '',
    control,
    name,
    defaultValue = '',
    icon: Icon,
    ...rest
  }: InputProps,
  ref: ForwardedRef<TextInput>,
) {
  const {colors} = useTheme();

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <S.Container>
            <S.ContainerInput isError={!!erro}>
              <Icon />
              <S.Input
                {...rest}
                ref={ref}
                placeholderTextColor={colors.gray300}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </S.ContainerInput>
            <Error error={erro} />
          </S.Container>
        </>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
}

const Input = forwardRef(InputContainer);

export {Input};
