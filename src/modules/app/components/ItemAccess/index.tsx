import React from 'react';
import {ItemProps} from './interfaces';

import * as S from './styles';

export function ItemAccess({item, ...rest}: ItemProps) {
  const {icon: Icon, label} = item;
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <Icon />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
