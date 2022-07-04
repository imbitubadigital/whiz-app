import React from 'react';
import {ButtonAddDevice} from '../ButtonAddDevice';
import {dataMenu} from './dataMenu';
import {ItemMenu} from './ItemMenu';
import * as S from './styles';

//import {} from './interfaces';

export function TabBottomMenu({state, navigation}: any) {
  return (
    <S.Container>
      {dataMenu.map(item => (
        <ItemMenu
          key={item.position}
          onPress={() => navigation.navigate(item.route)}
          item={item}
          active={state.index === item.position}
        />
      ))}
    </S.Container>
  );
}
