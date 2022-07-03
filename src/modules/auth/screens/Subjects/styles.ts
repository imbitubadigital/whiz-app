import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  padding: ${wp('10%')}px;
  padding-top: 24px;
  flex: 1;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.gray200};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  text-align: center;
  margin-top: 14px;
`;

export const ContainerList = styled.View`
  flex: 1;
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SeparatorList = styled.View`
  height: 12px;
  width: ${wp('2%')}px;
`;
