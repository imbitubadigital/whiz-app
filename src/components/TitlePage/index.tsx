import React from 'react';

import {TitlePageProps} from './interfaces';
import * as S from './styles';

export function TitlePage({children}: TitlePageProps) {
  return <S.Title>{children}</S.Title>;
}
