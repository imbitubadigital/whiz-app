import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Image, NativeModules, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
const {StatusBarManager} = NativeModules;
export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.gray900};
`;

export const Header = styled.View`
  height: 127px;
  background: ${props => props.theme.colors.secondary};
  padding-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + 5
    : StatusBarManager.HEIGHT + 10}px;
  position: relative;
`;

export const Content = styled.View`
  min-height: 50px;
  padding: ${wp('1.5%')}px ${wp('5%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: 102px;
  height: 102px;
  border-radius: 51px;
  position: absolute;
  bottom: -51px;
  left: ${wp('51%') - 51}px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf16}px;
  text-align: center;
`;

export const Score = styled.View`
  padding: 0 ${wp('10%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ScoreLeft = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ScoreRight = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const ScoreLabel = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  margin-left: 8px;
`;

export const Points = styled.Text`
  color: ${props => props.theme.colors.purple500};
  font-family: ${props => props.theme.font.KumbhSans700Bold};
  font-size: ${props => props.theme.size.rf14}px;
`;

export const ContentCard = styled.View`
  flex: 1;
  padding: ${wp('5.5%')}px;
`;
