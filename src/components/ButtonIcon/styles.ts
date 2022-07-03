import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  bg?: boolean;
}
export const Container = styled(TouchableOpacity)<ContainerProps>`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
