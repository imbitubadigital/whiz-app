import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';
interface PropsItem {
  active: boolean;
}
export const Container = styled(TouchableOpacity)<PropsItem>`
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<PropsItem>`
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray300};
  font-size: ${props => props.theme.size.rf10}px;
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  margin-top: 8px;
`;
