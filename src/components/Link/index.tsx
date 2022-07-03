import React from 'react';
import {LinkProps} from './interfaces';

import * as S from './styles';

//import {} from './interfaces';

export function Link({label, align = 'center', ...rest}: LinkProps) {
  return (
    <S.Container align={align} activeOpacity={0.7} {...rest}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
