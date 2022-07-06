import React, {useMemo} from 'react';
import BirdIcon from '@assets/bird.svg';
import ArrowLeft from '@assets/arrow-left.svg';
import Avatar from '@assets/avatar.png';
import * as S from './styles';
import {Separator} from '@src/components/Separator';

import {ButtonIcon} from '@src/components/ButtonIcon';
import {useLinkTo, useNavigation} from '@react-navigation/native';
import {dataProfile} from './data';
import {ItemProfile} from './ItemProfile';
import {useAuth} from '@src/contexts/auth';
import {ItemsHouse} from '@src/modules/auth/screens/SignupStepTwo/data';

export function Profile() {
  const navigation = useNavigation();
  const {user} = useAuth();
  const linkTo = useLinkTo();
  const house = useMemo(() => {
    return ItemsHouse.find(h => h.id === user?.house)?.name || '';
  }, [user.house]);
  const Icon = useMemo(() => {
    return ItemsHouse.find(h => h.id === user?.house)?.icon || BirdIcon;
  }, [user.house]);
  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <ButtonIcon icon={ArrowLeft} onPress={() => navigation.goBack()} />
        </S.Content>
        <S.Avatar source={Avatar} resizeMode="cover" />
      </S.Header>
      <Separator height={68} />

      <S.Title>{user.name}</S.Title>

      <S.Score>
        <S.ScoreLeft>
          <Icon width={40} />
          <S.ScoreLabel>{house}</S.ScoreLabel>
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
