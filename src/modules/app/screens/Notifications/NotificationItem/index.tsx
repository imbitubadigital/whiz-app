import React from 'react';
import {NotificationItemProps} from './interfaces';

import * as S from './styles';

export function NotificationItem({item, ...rest}: NotificationItemProps) {
  const {icon: Icon, label, read} = item;
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      {!read && <S.Bullet />}
      <Icon />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
