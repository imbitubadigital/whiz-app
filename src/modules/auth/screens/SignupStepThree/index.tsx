import React, {useCallback, useRef} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as S from './styles';
import {singUpFormStepThreeSchema} from '@src/utils/validators/yup';
import {BackgroundGradient} from '@src/components/BackgroundGradient';
import {Title} from '@src/components/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Separator} from '@src/components/Separator';
import {Input} from '@src/components/Form/Input';
import {Keyboard, TextInput} from 'react-native';
import emailIcon from '@assets/email.svg';
import passIcon from '@assets/pass.svg';
import {SignUpStepThreeProps} from './interfaces';
import {ButtonIcon} from '@src/components/ButtonIcon';
import ArrowLeft from '@assets/arrow-left.svg';
import {useLinkTo, useNavigation} from '@react-navigation/native';

import {Link} from '@src/components/Link';
import {Button} from '@src/components/Button';
import {Header} from '@src/components/Header';
import {useAuth} from '@src/contexts/auth';

export function SignupStepThree() {
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const {createUserStepThree} = useAuth();

  const linkTo = useLinkTo();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid},
  } = useForm<SignUpStepThreeProps>({
    mode: 'onChange',
    resolver: yupResolver(singUpFormStepThreeSchema),
  });

  const handleSignUpStepThree = useCallback(
    (data: SignUpStepThreeProps) => {
      Keyboard.dismiss();
      if (createUserStepThree(data)) {
        linkTo('/Subjects');
      }
    },
    [createUserStepThree, linkTo],
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
              Lastly, enter your {'\n'}
              <Title type="highlight">e-mail</Title> and{' '}
              <Title type="highlight">password</Title>
            </Title>

            <Separator height={78} />

            <Input
              control={control}
              erro={errors.email && String(errors.email.message)}
              icon={emailIcon}
              name="email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Enter your email"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />

            <Separator height={22} />

            <Input
              control={control}
              erro={errors.password && String(errors.password.message)}
              icon={passIcon}
              name="password"
              secureTextEntry
              autoCapitalize="none"
              ref={passwordRef}
              placeholder="Enter your password"
              returnKeyType="next"
              onSubmitEditing={() => passwordConfirmRef.current?.focus()}
            />
            <Separator height={22} />
            <Input
              control={control}
              erro={
                errors.passwordConfirmation &&
                String(errors.passwordConfirmation.message)
              }
              icon={passIcon}
              name="passwordConfirmation"
              secureTextEntry
              ref={passwordConfirmRef}
              placeholder="Confirm password"
              autoCapitalize="none"
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSignUpStepThree)}
            />

            <Separator height={80} />

            <S.ContainerButton>
              <Button
                label="Create account"
                onPress={handleSubmit(handleSignUpStepThree)}
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
