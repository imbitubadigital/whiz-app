import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View``;
export const Content = styled.View`
  padding: ${wp('10%')}px;
  padding-top: 100px;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
`;
