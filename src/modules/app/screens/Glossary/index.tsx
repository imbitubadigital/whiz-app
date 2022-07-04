import React from 'react';

import * as S from './styles';
import MobileMenu from '@assets/menu-mobile.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';
import {Avatar} from '@src/components/Avatar';

export function Glossary() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <Header
        componentLeft={() => (
          <ButtonIcon
            icon={MobileMenu}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )}
        componentRight={() => <Avatar />}
      />
      <S.Content>
        <S.Scroll>
          <S.Txt>Glossary</S.Txt>
          <S.Txt>Glossary</S.Txt>
          <S.Txt>Glossary</S.Txt>
          <S.Txt>Glossary</S.Txt>
        </S.Scroll>
      </S.Content>
    </S.Container>
  );
}
