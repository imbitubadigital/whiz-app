import React from 'react';
import {TabProps} from './interfaces';

import * as S from './styles';

export function Tab({tab, onClick}: TabProps) {
  return (
    <S.Container>
      <S.BtnTab
        active={tab === 1}
        activeOpacity={0.7}
        onPress={() => onClick(1)}>
        <S.Label active={tab === 1}>Homework</S.Label>
      </S.BtnTab>
      <S.BtnTab
        active={tab === 2}
        activeOpacity={0.7}
        onPress={() => onClick(2)}>
        <S.Label active={tab === 2}>Tests</S.Label>
      </S.BtnTab>
    </S.Container>
  );
}
