import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${Platform.OS === 'ios' ? 82 : 72}px;
  padding: 0 ${wp('8%')}px;
  background: ${props => props.theme.colors.gray900};
  position: relative;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.primary}; ;
`;
