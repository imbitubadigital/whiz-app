import React from 'react';

import {TitleProps} from './interfaces';
import * as S from './styles';

export function Title({children, type = 'normal'}: TitleProps) {
  return <S.Title type={type}>{children}</S.Title>;
}
