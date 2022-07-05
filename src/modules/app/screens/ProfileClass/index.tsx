import React from 'react';

import * as S from './styles';
import ArrowLeft from '@assets/arrow-left.svg';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';

import {TitlePage} from '@src/components/TitlePage';
import {FlatList} from 'react-native';
import {dataClass} from './data';
import {CardClass} from './CardClass';
import {Separator} from '@src/components/Separator';

export function ProfileClass() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <Header
        componentLeft={() => (
          <ButtonIcon icon={ArrowLeft} onPress={() => navigation.goBack()} />
        )}
      />
      <S.Content>
        <TitlePage>My Classes</TitlePage>

        <Separator height={40} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={dataClass}
          renderItem={({item}) => <CardClass item={item} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <S.SeparatorList />}
        />
      </S.Content>
    </S.Container>
  );
}
