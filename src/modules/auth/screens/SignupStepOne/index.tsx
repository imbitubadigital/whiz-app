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
import {TextInput} from 'react-native';
import UserIcon from '@assets/user.svg';
import SchoolIcon from '@assets/school.svg';
import {SignUpStepOneProps} from './interfaces';

import {Link} from '@src/components/Link';
import {Button} from '@src/components/Button';

export function SignupStepOne() {
  const schoolIdRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpStepOneProps>({
    mode: 'onChange',
    resolver: yupResolver(singUpFormStepOneSchema),
  });

  const handleSignUpStepOne = useCallback(async (data: SignUpStepOneProps) => {
    console.log('data', data);
  }, []);

  return (
    <BackgroundGradient>
      <S.Container>
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Separator height={56} />
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
              returnKeyType="next"
            />

            <Link label="forgot your ID?" align="right" />
            <Separator height={80} />

            <S.ContainerButton>
              <Button
                label="Next"
                onPress={handleSubmit(handleSignUpStepOne)}
              />
            </S.ContainerButton>
            <Separator height={18} />
            <Link label="I already have an account" />
          </S.Content>
        </KeyboardAwareScrollView>
      </S.Container>
    </BackgroundGradient>
  );
}
