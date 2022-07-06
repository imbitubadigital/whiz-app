import styled from 'styled-components/native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {DrawerContentScrollView} from '@react-navigation/drawer';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  background: red;
`;

export const Header = styled.View`
  padding: 0 ${wp('3%')}px;
`;
export const TitleMenu = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans700Bold};
  font-size: ${props => props.theme.size.rf20}px;
  margin: 40px ${wp('3%')}px;
`;
export const Content = styled.View`
  flex: 1;
  padding: 0 ${wp('6%')}px;
`;
interface PropsItem {
  active: boolean;
}
export const Item = styled.TouchableOpacity<PropsItem>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: ${wp('4%')}px 0;
  height: 30px;
`;

export const TxtItem = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf16}px;
  margin-left: ${wp('3%')}px;
`;

export const CustomDrawerContentScrollView = styled(DrawerContentScrollView)`
  background: ${props => props.theme.colors.gray600};
`;
