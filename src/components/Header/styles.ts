import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {NativeModules, Platform} from 'react-native';
const {StatusBarManager} = NativeModules;

interface ContainerProps {
  hasBorder: boolean;
}
export const Container = styled.View<ContainerProps>`
  padding-bottom: 10px;
  padding-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + 5
    : StatusBarManager.HEIGHT + 10}px;
`;
export const Content = styled.View`
  min-height: 50px;
  padding: ${wp('1.5%')}px ${wp('5%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FakeBoxLeft = styled.View`
  width: ${wp('10%')}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FakeBoxRight = styled.View`
  width: ${wp('10%')}px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerCenter = styled.View`
  flex: 1;
  margin: 0 ${wp('1%')}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf16}px;
  color: ${props => props.theme.colors.gray200};
`;
