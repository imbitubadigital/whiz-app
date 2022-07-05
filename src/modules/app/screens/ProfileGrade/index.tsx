import React from 'react';

import * as S from './styles';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {Header} from '@src/components/Header';

import {Separator} from '@src/components/Separator';

import {Grades} from './Grades';
import {TitlePage} from '@src/components/TitlePage';
import ArrowLeft from '@assets/arrow-left.svg';
export function ProfileGrade() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <Header
        componentLeft={() => (
          <ButtonIcon icon={ArrowLeft} onPress={() => navigation.goBack()} />
        )}
      />
      <S.Content>
        <TitlePage>My Grades</TitlePage>

        <Separator height={40} />
        <Grades />
      </S.Content>
    </S.Container>
  );
}
