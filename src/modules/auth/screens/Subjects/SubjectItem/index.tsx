import React from 'react';
import {SubjectProps} from './interfaces';

import * as S from './styles';

export function SubjectItem({item, selected, ...rest}: SubjectProps) {
  const {icon: Icon, name} = item;
  return (
    <S.ContainerItem isSelected={selected} activeOpacity={0.7} {...rest}>
      <Icon />
      <S.Label>{name}</S.Label>
    </S.ContainerItem>
  );
}
