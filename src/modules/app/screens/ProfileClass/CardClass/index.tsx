import React, {useMemo} from 'react';
import {CardClassProps} from './interfaces';
import ArrowRight from '@assets/arrow-right2.svg';
import * as S from './styles';

export function CardClass({item, ...rest}: CardClassProps) {
  const {date, name, status, icon: Icon} = item;
  const statusCard = useMemo(() => {
    if (status === 'pending' || status === 'complete') {
      return (
        <S.Bullet status={status}>
          <S.LabelBullet>Homework pending</S.LabelBullet>
        </S.Bullet>
      );
    }

    return <></>;
  }, [status]);
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.Left>
        <S.BoxIcon>
          <Icon />
        </S.BoxIcon>
        <S.BoxTitle>
          <S.Title>{name}</S.Title>
          {statusCard}
        </S.BoxTitle>
      </S.Left>
      <S.Right>
        <S.LabelDate>{date}</S.LabelDate>
        <ArrowRight />
      </S.Right>
    </S.Container>
  );
}
