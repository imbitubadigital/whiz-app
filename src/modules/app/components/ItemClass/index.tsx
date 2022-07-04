import React from 'react';
import {ItemProps} from './interfaces';

import * as S from './styles';

//import {} from './interfaces';

export function ItemClass({item}: ItemProps) {
  const {icon: Icon, labelLeft, labelRight} = item;
  return (
    <S.Container>
      <S.Left>
        <Icon width={16} />
        <S.LabelLeft>{labelLeft}</S.LabelLeft>
      </S.Left>
      <S.Right>
        <S.LabelRight>{labelRight}</S.LabelRight>
      </S.Right>
    </S.Container>
  );
}
