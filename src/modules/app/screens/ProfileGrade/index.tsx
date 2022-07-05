import React from 'react';

import * as S from './styles';
import MobileMenu from '@assets/menu-mobile.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';
import {Avatar} from '@src/components/Avatar';
import {Separator} from '@src/components/Separator';

import {Grades} from './Grades';
import {TitlePage} from '@src/components/TitlePage';

export function ProfileGrade() {
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
        <TitlePage>My Grades</TitlePage>

        <Separator height={40} />
        <Grades />
      </S.Content>
    </S.Container>
  );
}
