import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  border-radius: 5px;
  background: ${props => props.theme.colors.gray600};
  height: 126px;
  width: 126px;
  margin: 12px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  text-align: center;
  margin-top: 24px;
`;
