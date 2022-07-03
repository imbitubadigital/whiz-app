import styled from 'styled-components/native';

import {StyleSheet, TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  height: 42px;
  width: 190px;
  border-radius: 10px;
  background: ${props => props.theme.colors.purple500};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.gray100};
  font-family: ${props => props.theme.font.KumbhSans700Bold};
  font-size: ${props => props.theme.size.rf14}px;
`;

export const Styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
