import styled from 'styled-components/native';

import {ScrollView} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ScrollTour = styled(ScrollView).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  width: 100%;
`;
export const Footer = styled.View`
  height: 160px;
  padding: 5px;
`;
interface ActiveProps {
  active: boolean;
}
export const ContentFooter = styled.View<ActiveProps>`
  height: 60px;
  flex-direction: column;
  justify-content: ${props => (props.active ? 'center' : 'space-between')};
  align-items: center;
`;

export const ContainerBullet = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Bullet = styled.View<ActiveProps>`
  width: ${props => (props.active ? 24.5 : 12)}px;
  height: 12px;
  background: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.gray300};
  border-radius: 6px;
  margin: 0 3px;
`;
