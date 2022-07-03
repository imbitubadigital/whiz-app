import React from 'react';
import {ErrorProps} from './interfaces';

import * as S from './styles';

export function Error({error}: ErrorProps) {
  return (
    <S.Container>{!!error && <S.TextError>{error}</S.TextError>}</S.Container>
  );
}
