import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  border-radius: 5px;
  background: ${props => props.theme.colors.gray600};
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 0 16px;
`;
export const Bullet = styled.View`
  width: 10px;
  height: 10px;
  background: ${props => props.theme.colors.purple500};
  border-radius: 5px;
  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 100;
`;

export const Label = styled.Text`
  margin: 0 16px;
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf12}px;
`;
