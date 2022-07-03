import React from 'react';

import * as S from './styles';
import {StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
export function Signup() {
  return (
    // <View style={styles.container}>
    <LinearGradient
      // Background Linear Gradient
      colors={['#5C3A77', '#231E25', '#231E25', '#231E25']}
      start={{x: 1.5, y: 0}}
      end={{x: 0.1, y: 0.65}}
      style={styles.background}>
      <S.Container>
        <S.Txt>Signup bb</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup xxxa</S.Txt>
        <S.Txt>Signup bb</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup</S.Txt>
        <S.Txt>Signup xxxa</S.Txt>
      </S.Container>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
  },
});
