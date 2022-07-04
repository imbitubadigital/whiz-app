import React from 'react';

import * as S from './styles';
import MobileMenu from '@assets/menu-mobile.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';
import {Avatar} from '@src/components/Avatar';
import {Separator} from '@src/components/Separator';
import {Points} from '../../components/Points';
import {NextClasses} from '../../components/NextClasses';
import {Link} from '@src/components/Link';
import {QuickAccess} from '../../components/QuickAcess';

export function Home() {
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
          <Points />
          <Separator height={56} />
          <NextClasses />
          <Link label="See all" align="right" />
          <Separator height={36} />
          <QuickAccess />
        </S.Scroll>
      </S.Content>
    </S.Container>
  );
}
