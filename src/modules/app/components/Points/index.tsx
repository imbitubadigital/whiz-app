import React, {useCallback} from 'react';
import {ItemsHouseHome} from './data';

import * as S from './styles';

export function Points() {
  const handleRenderItem = useCallback(() => {
    return ItemsHouseHome.map((item, index) => {
      const {icon: Icon, id, label} = item;

      return (
        <S.Item key={id}>
          <Icon width={index > 0 ? 70 : 92} />
          <S.Label>{label}</S.Label>
        </S.Item>
      );
    });
  }, []);
  return <S.Container>{handleRenderItem()}</S.Container>;
}
