import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface BtnProps {
  isSelected: boolean;
}
export const ContainerItem = styled(TouchableOpacity)<BtnProps>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 56px;
  width: 100%;
  padding: 0 16px;
  background: ${props => props.theme.colors.gray600};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props =>
    props.isSelected ? props.theme.colors.primary : props.theme.colors.gray600};
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.gray200};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  margin-left: 16px;
`;
