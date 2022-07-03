import React from 'react';
import {HouseGroupProps} from './interfaces';

import * as S from './styles';

//import {} from './interfaces';

export function HouseGroup({items, onSelect, selectedItem}: HouseGroupProps) {
  return (
    <S.Container>
      {items.map(item => {
        const {icon: Icon, id} = item;
        return (
          <S.ContainerItem
            key={id}
            isSelected={selectedItem === id}
            activeOpacity={0.7}
            onPress={() => onSelect(id)}>
            <Icon />
          </S.ContainerItem>
        );
      })}
    </S.Container>
  );
}
