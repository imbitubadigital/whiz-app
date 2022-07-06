import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {ButtonProps} from './interfaces';

import * as S from './styles';

//import {} from './interfaces';

export function Button({label, loading = false, ...rest}: ButtonProps) {
  const {colors} = useTheme();
  return (
    <S.Container activeOpacity={0.7} {...rest} isLoading={loading}>
      <LinearGradient
        colors={['#9060b6', '#33CD83']}
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0}}
        style={S.Styles.background}>
        {!loading ? (
          <S.Label>{label}</S.Label>
        ) : (
          <ActivityIndicator size="small" color={colors.gray100} />
        )}
      </LinearGradient>
    </S.Container>
  );
}
