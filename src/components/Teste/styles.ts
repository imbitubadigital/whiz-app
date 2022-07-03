import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: 140px;
  justify-content: center;
  align-items: center;
  padding: ${wp('5%')}px;
  background: red;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #000000;
`;
