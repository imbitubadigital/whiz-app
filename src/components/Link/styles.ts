import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface PropsLink {
  align: 'left' | 'center' | 'right';
}

const typeAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};
export const Container = styled(TouchableOpacity)<PropsLink>`
  flex-direction: row;
  justify-content: ${props => typeAlign[props.align]};
  align-items: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
`;
