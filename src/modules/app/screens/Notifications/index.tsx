import React from 'react';

import * as S from './styles';
import MobileMenu from '@assets/menu-mobile.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';
import {Avatar} from '@src/components/Avatar';
import {TitlePage} from '@src/components/TitlePage';
import {FlatList} from 'react-native';
import {NotificationItem} from './NotificationItem';
import {notificationData} from './data';
import {Separator} from '@src/components/Separator';

export function Notifications() {
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
        <TitlePage>Notifications</TitlePage>

        <Separator height={30} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: 5}}
          data={notificationData}
          renderItem={({item}) => <NotificationItem item={item} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <S.SeparatorList />}
        />
      </S.Content>
    </S.Container>
  );
}
