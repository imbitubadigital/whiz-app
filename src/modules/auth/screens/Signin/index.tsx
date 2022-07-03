import React, {useCallback, useRef} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as S from './styles';
import {singInFormSchema} from '@src/utils/validators/yup';
import {BackgroundGradient} from '@src/components/BackgroundGradient';
import {Title} from '@src/components/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Separator} from '@src/components/Separator';
import {Input} from '@src/components/Form/Input';
import {TextInput} from 'react-native';
import EmailIcon from '@assets/email.svg';
import PassIcon from '@assets/pass.svg';
import {SignInProps} from './interfaces';

import {Link} from '@src/components/Link';
import {Button} from '@src/components/Button';
import {Header} from '@src/components/Header';
import {useLinkTo} from '@react-navigation/native';

export function Signin() {
  const passwordRef = useRef<TextInput>(null);
  const linkTo = useLinkTo();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInProps>({
    mode: 'onChange',
    resolver: yupResolver(singInFormSchema),
  });

  const handleSignUpStepOne = useCallback(async (data: SignInProps) => {
    console.log('data', data);
  }, []);

  return (
    <BackgroundGradient>
      <S.Container>
        <Header />
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <S.Content>
            <Title>
              It’s great
              {'\n'}
              seeing you here.
            </Title>

            <Separator height={78} />

            <Input
              control={control}
              erro={errors.email && String(errors.email.message)}
              icon={EmailIcon}
              name="email"
              placeholder="Enter your email"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />

            <Separator height={22} />

            <Input
              control={control}
              erro={errors.password && String(errors.password.message)}
              icon={PassIcon}
              name="password"
              ref={passwordRef}
              placeholder="Enter your password"
              autoCapitalize="none"
              returnKeyType="next"
            />

            <Link label="forgot your password?" align="right" />
            <Separator height={80} />

            <S.ContainerButton>
              <Button
                label="Log in"
                onPress={handleSubmit(handleSignUpStepOne)}
              />
            </S.ContainerButton>
            <Separator height={18} />
            <Link
              label="I’m not registered yet"
              onPress={() => linkTo('/SignupStepOne')}
            />
          </S.Content>
        </KeyboardAwareScrollView>
      </S.Container>
    </BackgroundGradient>
  );
}
