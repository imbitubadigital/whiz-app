import React from 'react';
import {ItemProps} from './interfaces';
import ArrowRight from '@assets/arrow-right.svg';
import * as S from './styles';

export function ItemProfile({item, ...rest}: ItemProps) {
  const {icon: Icon, label} = item;
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.Left>
        <Icon width={16} />
        <S.LabelLeft>{label}</S.LabelLeft>
      </S.Left>
      <S.Right>
        <ArrowRight />
      </S.Right>
    </S.Container>
  );
}
