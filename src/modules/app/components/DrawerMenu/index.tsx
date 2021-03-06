import {DrawerContentComponentProps} from '@react-navigation/drawer';
import ArrowLeft from '@assets/arrow-left.svg';
import UserIcon from '@assets/user-menu.svg';
import HelpIcon from '@assets/help.svg';
import TourIcon from '@assets/tour.svg';
import LogoutIcon from '@assets/logout.svg';
import SettingIcon from '@assets/setting.svg';
import React from 'react';

import * as S from './styles';

import {DrawerActions, useLinkTo} from '@react-navigation/native';
import {ButtonIcon} from '@src/components/ButtonIcon';
import {useAuth} from '@src/contexts/auth';

const DrawerMenu: React.FC<DrawerContentComponentProps> = props => {
  const {navigation} = props;
  const linkTo = useLinkTo();
  const {signOut, reviewTour} = useAuth();

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
            onPress={() => linkTo('/ProfileStack')}
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
          <S.Item activeOpacity={0.7} active={true} onPress={reviewTour}>
            <TourIcon />
            <S.TxtItem>Review tour</S.TxtItem>
          </S.Item>
          <S.Item activeOpacity={0.7} active={true} onPress={signOut}>
            <LogoutIcon />
            <S.TxtItem>Log out</S.TxtItem>
          </S.Item>
        </S.Content>
      </S.CustomDrawerContentScrollView>
    </>
  );
};

export {DrawerMenu};
