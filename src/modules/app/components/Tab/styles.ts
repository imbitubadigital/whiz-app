import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

interface ActiveProps {
  active: boolean;
}
export const BtnTab = styled(TouchableOpacity)<ActiveProps>`
  border-bottom-width: 3px;
  border-bottom-color: ${props =>
    props.active ? props.theme.colors.primary : 'transparent'};
  margin-right: 24px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text<ActiveProps>`
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
`;
