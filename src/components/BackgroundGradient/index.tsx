import React from 'react';

import * as S from './styles';

import {LinearGradient} from 'expo-linear-gradient';
import {BackgroundGradientProps} from './interfaces';
export function BackgroundGradient({children}: BackgroundGradientProps) {
  return (
    <LinearGradient
      colors={['#5C3A77', '#231E25', '#231E25', '#231E25']}
      start={{x: 1.5, y: 0}}
      end={{x: 0.1, y: 0.65}}
      style={S.Styles.background}>
      {children}
    </LinearGradient>
  );
}
