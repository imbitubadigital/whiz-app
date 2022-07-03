import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {ButtonProps} from './interfaces';

import * as S from './styles';

//import {} from './interfaces';

export function Button({label, ...rest}: ButtonProps) {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <LinearGradient
        colors={['#9060b6', '#33CD83']}
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0}}
        style={S.Styles.background}>
        <S.Label>{label}</S.Label>
      </LinearGradient>
    </S.Container>
  );
}
