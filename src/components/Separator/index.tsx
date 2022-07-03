import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as S from './styles';

import {SeparatorProps} from './interfaces';

export function Separator({hp = '', height}: SeparatorProps) {
  return (
    <S.Container height={height} visible={hp !== ''}>
      {!!hp && <S.Txt>{wp(`${hp}%`)}</S.Txt>}
    </S.Container>
  );
}
