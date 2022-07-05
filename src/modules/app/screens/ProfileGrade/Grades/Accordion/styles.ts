import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

interface ContainerProps {
  active: boolean;
}
export const Container = styled.View<ContainerProps>`
  margin-top: 14px;
  background: ${props => props.theme.colors.gray600};
  border-radius: 5px;
`;

interface ActiveProps {
  active: boolean;
}
export const Header = styled.View<ActiveProps>`
  height: 50px;
  justify-content: center;
  background: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray600};
  border-radius: 5px;
`;
export const ContainerPosition = styled.View`
  padding: 3px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerTitle = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const Title = styled.Text<ActiveProps>`
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  color: ${props =>
    props.active ? props.theme.colors.gray900 : props.theme.colors.gray300};
  font-size: ${props => props.theme.size.rf14}px;
`;

export const Right = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

interface ScoreProps {
  small: boolean;
  active: boolean;
}
export const Score = styled.Text<ScoreProps>`
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  color: ${props =>
    props.active ? props.theme.colors.gray900 : props.theme.colors.gray300};
  font-size: ${props =>
    props.small ? props.theme.size.rf10 : props.theme.size.rf14}px;
`;

export const ContainerIcon = styled(Animated.View)`
  border-radius: 14px;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
export const ContainerItens = styled(Animated.View)``;

export const Item = styled.View`
  padding: 8px;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextItem = styled.Text`
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.size.rf14}px;
`;
