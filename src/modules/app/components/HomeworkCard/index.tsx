import React from 'react';
import {HomeworkCardProps} from './interfaces';
import ChevronIcon from '@assets/chevron.svg';
import * as S from './styles';

export function HomeworkCard({item}: HomeworkCardProps) {
  const {icon: Icon, complete, date, description, name} = item;
  return (
    <S.Container>
      <S.Left>
        <S.Header>
          <Icon />
          <S.Title>{name}</S.Title>
        </S.Header>
        <S.BoxDescription>
          <S.Description>{description}</S.Description>
        </S.BoxDescription>
      </S.Left>
      <S.Right>
        <S.DateLabel>{date}</S.DateLabel>
        <S.BoxStatus>
          <S.Checkbox complete={complete}>
            {complete && <ChevronIcon />}
          </S.Checkbox>
          <S.LabelStatus>Complete</S.LabelStatus>
        </S.BoxStatus>
      </S.Right>
    </S.Container>
  );
}
