import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('100%') - 160}px;
  justify-content: center;
  align-items: center;
`;
export const ContentTitle = styled.View`
  width: ${wp('100%')}px;
  padding: ${wp('20%')}px ${wp('10%')}px 0;
`;
interface TitleProps {
  highlight: boolean;
}
export const Title = styled.Text<TitleProps>`
  color: ${props =>
    props.highlight ? props.theme.colors.primary : props.theme.colors.gray200};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  text-align: center;
`;
