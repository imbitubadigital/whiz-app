import React from 'react';
import BirdIcon from '@assets/bird.svg';
import ArrowLeft from '@assets/arrow-left.svg';
import Avatar from '@assets/avatar.png';
import * as S from './styles';
import {Separator} from '@src/components/Separator';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {useLinkTo, useNavigation} from '@react-navigation/native';
import {dataProfile} from './data';
import {ItemProfile} from './ItemProfile';

export function Profile() {
  const navigation = useNavigation();
  const linkTo = useLinkTo();
  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <ButtonIcon icon={ArrowLeft} onPress={() => navigation.goBack()} />
        </S.Content>
        <S.Avatar source={Avatar} resizeMode="cover" />
      </S.Header>
      <Separator height={68} />

      <S.Title>Luna Lovegood</S.Title>

      <S.Score>
        <S.ScoreLeft>
          <BirdIcon width={40} />
          <S.ScoreLabel>Ravenclaw</S.ScoreLabel>
        </S.ScoreLeft>
        <S.ScoreRight>
          <S.Points>120</S.Points>
          <S.ScoreLabel>Points earned</S.ScoreLabel>
        </S.ScoreRight>
      </S.Score>

      <S.ContentCard>
        {dataProfile.map(item => (
          <ItemProfile
            key={item.id}
            item={item}
            onPress={() => linkTo(item.link)}
          />
        ))}
      </S.ContentCard>
    </S.Container>
  );
}
