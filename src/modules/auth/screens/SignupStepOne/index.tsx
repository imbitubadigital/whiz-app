import React, {useCallback, useRef} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as S from './styles';
import {singUpFormStepOneSchema} from '@src/utils/validators/yup';
import {BackgroundGradient} from '@src/components/BackgroundGradient';
import {Title} from '@src/components/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Separator} from '@src/components/Separator';
import {Input} from '@src/components/Form/Input';
import {TextInput, Keyboard} from 'react-native';
import UserIcon from '@assets/user.svg';
import SchoolIcon from '@assets/school.svg';
import {SignUpStepOneProps} from './interfaces';

import {Link} from '@src/components/Link';
import {Button} from '@src/components/Button';
import {Header} from '@src/components/Header';
import {ButtonIcon} from '@src/components/ButtonIcon';
import ArrowLeft from '@assets/arrow-left.svg';
import {useLinkTo, useNavigation} from '@react-navigation/native';
import {useAuth} from '@src/contexts/auth';
export function SignupStepOne() {
  const schoolIdRef = useRef<TextInput>(null);
  const linkTo = useLinkTo();
  const navigation = useNavigation();
  const {createUserStepOne} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid},
  } = useForm<SignUpStepOneProps>({
    mode: 'onChange',
    resolver: yupResolver(singUpFormStepOneSchema),
  });

  const handleSignUpStepOne = useCallback(
    (data: SignUpStepOneProps) => {
      Keyboard.dismiss();
      if (createUserStepOne(data)) {
        linkTo('/SignupStepTwo');
      }
    },
    [createUserStepOne, linkTo],
  );

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
          <S.Content>
            <Title>
              First, tell us your <Title type="highlight">name</Title> {'\n'}
              and <Title type="highlight">school ID</Title>
            </Title>

            <Separator height={78} />

            <Input
              control={control}
              erro={errors.name && String(errors.name.message)}
              icon={UserIcon}
              name="name"
              placeholder="Enter your name"
              returnKeyType="next"
              onSubmitEditing={() => schoolIdRef.current?.focus()}
            />

            <Separator height={22} />

            <Input
              control={control}
              erro={errors.schoolId && String(errors.schoolId.message)}
              icon={SchoolIcon}
              name="schoolId"
              ref={schoolIdRef}
              placeholder="Enter your school id"
              autoCapitalize="none"
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSignUpStepOne)}
            />

            <Link label="forgot your ID?" align="right" />
            <Separator height={80} />

            <S.ContainerButton>
              <Button
                label="Next"
                onPress={handleSubmit(handleSignUpStepOne)}
                disabled={!isDirty || !isValid}
              />
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
