import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  padding: 14px;
  border-radius: 5px;
  background: ${props => props.theme.colors.gray600};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const BoxIcon = styled.View`
  align-items: stretch;
`;
export const BoxTitle = styled.View`
  margin-left: 14px;
`;
export const Title = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  margin-bottom: 10px;
`;

interface BulletProps {
  status: string;
}
export const Bullet = styled.View<BulletProps>`
  background: ${props =>
    props.status === 'pending'
      ? props.theme.colors.brown400
      : props.theme.colors.success};

  border-radius: 5px;
  padding: 3px 5px;
`;
export const LabelBullet = styled.Text`
  color: ${props => props.theme.colors.gray100};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf10}px;
`;
export const Right = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;
export const LabelDate = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf10}px;
  margin-bottom: 10px;
`;
