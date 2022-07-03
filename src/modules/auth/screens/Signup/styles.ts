import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';
//import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View``;
export const Bg = styled(ImageBackground)`
  flex: 1;
  position: relative;
`;

export const Txt = styled.Text`
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf22}px;
  color: ${props => props.theme.colors.secondary};
`;
