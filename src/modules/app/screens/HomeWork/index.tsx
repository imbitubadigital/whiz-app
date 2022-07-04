import React from 'react';

import * as S from './styles';
import MobileMenu from '@assets/menu-mobile.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';
import {Avatar} from '@src/components/Avatar';
import {TitlePage} from '@src/components/TitlePage';
import {Separator} from '@src/components/Separator';
import {FlatList} from 'react-native';
import {dataTests} from './data';
import {ItemClass} from '../../components/ItemClass';

export function HomeWork() {
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
        <TitlePage>Homework and Tests</TitlePage>
        <Separator height={30} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={dataTests}
          renderItem={({item}) => (
            <ItemClass
              item={{
                id: item.id,
                icon: item.icon,
                labelLeft: item.name,
                labelRight: item.date,
              }}
              highlight
            />
          )}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <S.SeparatorList />}
        />
      </S.Content>
    </S.Container>
  );
}
