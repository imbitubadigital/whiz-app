import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled(KeyboardAwareScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
export const Content = styled.View`
  flex: 1;
  padding: ${wp('5.5%')}px;
`;

export const Txt = styled.Text`
  color: red;
  font-size: 20px;
`;
