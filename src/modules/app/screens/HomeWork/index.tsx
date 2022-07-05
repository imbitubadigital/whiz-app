import React, {useCallback, useState} from 'react';

import * as S from './styles';
import MobileMenu from '@assets/menu-mobile.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';
import {Avatar} from '@src/components/Avatar';
import {TitlePage} from '@src/components/TitlePage';
import {Separator} from '@src/components/Separator';
import {FlatList} from 'react-native';
import {dataHomeWork, dataTests} from './data';
import {ItemClass} from '../../components/ItemClass';
import {HomeworkCard} from '../../components/HomeworkCard';
import {Tab} from '../../components/Tab';

export function HomeWork() {
  const navigation = useNavigation();
  const [tab, setTab] = useState(1);

  const settingTab = useCallback((id: number) => {
    setTab(id);
  }, []);
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

        <Tab tab={tab} onClick={settingTab} />
        <Separator height={22} />
        {tab === 1 && (
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
            ItemSeparatorComponent={() => <S.SeparatorListTest />}
          />
        )}
        {tab === 2 && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={dataHomeWork}
            renderItem={({item}) => <HomeworkCard item={item} />}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={() => <S.SeparatorList />}
          />
        )}
      </S.Content>
    </S.Container>
  );
}
