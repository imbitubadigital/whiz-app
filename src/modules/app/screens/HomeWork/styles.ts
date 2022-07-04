import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.gray900};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${wp('5.5%')}px;
`;

export const SeparatorList = styled.View`
  color: red;
  height: 14px;
`;
