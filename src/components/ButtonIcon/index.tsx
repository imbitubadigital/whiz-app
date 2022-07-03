import React from 'react';

import * as S from './styles';

import {ButtonIconProps} from './interfaces';

export function ButtonIcon({icon: Icon, bg = false, ...rest}: ButtonIconProps) {
  return (
    <S.Container
      hitSlop={{
        top: 25,
        left: 25,
        right: 25,
        bottom: 25,
      }}
      activeOpacity={0.7}
      bg={bg}
      {...rest}>
      <Icon />
    </S.Container>
  );
}
