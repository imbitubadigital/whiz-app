import {DrawerContentComponentProps} from '@react-navigation/drawer';
import ArrowLeft from '@assets/arrow-left.svg';
import UserIcon from '@assets/user-menu.svg';
import HelpIcon from '@assets/help.svg';
import LogoutIcon from '@assets/logout.svg';
import SettingIcon from '@assets/setting.svg';
import React from 'react';

import * as S from './styles';

import {DrawerActions} from '@react-navigation/native';
import {ButtonIcon} from '@src/components/ButtonIcon';

const DrawerMenu: React.FC<DrawerContentComponentProps> = props => {
  const {navigation} = props;

  return (
    <>
      <S.CustomDrawerContentScrollView showsVerticalScrollIndicator={false}>
        <S.Header>
          <ButtonIcon
            icon={ArrowLeft}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
          <S.TitleMenu>Menu</S.TitleMenu>
        </S.Header>
        <S.Content>
          <S.Item
            onPress={() => navigation.navigate('home')}
            activeOpacity={0.7}
            active={true}>
            <UserIcon />
            <S.TxtItem>Profile</S.TxtItem>
          </S.Item>

          <S.Item activeOpacity={0.7} active={true}>
            <SettingIcon />
            <S.TxtItem>Settings</S.TxtItem>
          </S.Item>
          <S.Item activeOpacity={0.7} active={true}>
            <HelpIcon />
            <S.TxtItem>Help</S.TxtItem>
          </S.Item>
          <S.Item activeOpacity={0.7} active={true}>
            <LogoutIcon />
            <S.TxtItem>Log out</S.TxtItem>
          </S.Item>
        </S.Content>
      </S.CustomDrawerContentScrollView>
    </>
  );
};

export {DrawerMenu};
