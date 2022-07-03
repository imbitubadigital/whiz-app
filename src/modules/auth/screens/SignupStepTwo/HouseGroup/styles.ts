import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Txt = styled.Text``;

interface BtnProps {
  isSelected: boolean;
}
export const ContainerItem = styled(TouchableOpacity)<BtnProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 128px;
  margin: 16px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${props =>
    props.isSelected ? props.theme.colors.primary : 'transparent'};
`;
