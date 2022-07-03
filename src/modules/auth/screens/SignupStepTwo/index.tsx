import React, {useCallback, useState} from 'react';

import * as S from './styles';

import {BackgroundGradient} from '@src/components/BackgroundGradient';
import {Title} from '@src/components/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Separator} from '@src/components/Separator';

import {Link} from '@src/components/Link';
import {Button} from '@src/components/Button';
import {HouseGroup} from './HouseGroup';
import {ItemsHouse} from './data';
import {Header} from '@src/components/Header';
import {ButtonIcon} from '@src/components/ButtonIcon';
import ArrowLeft from '@assets/arrow-left.svg';
import {useLinkTo, useNavigation} from '@react-navigation/native';

export function SignupStepTwo() {
  const linkTo = useLinkTo();
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const handleSelect = useCallback((id: string) => {
    setSelected(id);
  }, []);
  return (
    <BackgroundGradient>
      <S.Container>
        <Header
          componentLeft={() => (
            <ButtonIcon icon={ArrowLeft} onPress={() => navigation.goBack()} />
          )}
        />
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {/* <Separator height={56} /> */}
          <S.Content>
            <Title>
              Which <Title type="highlight">house</Title> are{'\n'}
              you in?
            </Title>

            <Separator height={40} />

            <HouseGroup
              items={ItemsHouse}
              selectedItem={selected}
              onSelect={handleSelect}
            />

            <Separator height={60} />

            <S.ContainerButton>
              <Button label="Next" onPress={() => linkTo('/SignupStepThree')} />
            </S.ContainerButton>
            <Separator height={18} />
            <Link
              label="I already have an account"
              onPress={() => linkTo('/Signin')}
            />
          </S.Content>
        </KeyboardAwareScrollView>
      </S.Container>
    </BackgroundGradient>
  );
}
