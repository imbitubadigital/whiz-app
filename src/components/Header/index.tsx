import React from 'react';

import * as S from './styles';

import {PropsHeader} from './interfaces';

export function Header({
  componentRight: ComponentRight,
  componentLeft: ComponentLeft,
  title = '',
  noBorder = false,
}: PropsHeader) {
  return (
    <S.Container hasBorder={noBorder}>
      <S.Content>
        <S.FakeBoxLeft>{ComponentLeft && <ComponentLeft />}</S.FakeBoxLeft>
        <S.ContainerCenter>
          <S.Title>{title ? title : ''}</S.Title>
        </S.ContainerCenter>
        <S.FakeBoxRight>{ComponentRight && <ComponentRight />}</S.FakeBoxRight>
      </S.Content>
    </S.Container>
  );
}
