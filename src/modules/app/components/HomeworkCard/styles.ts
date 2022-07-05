import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px;
  border-radius: 5px;
  background: ${props => props.theme.colors.gray600};
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100px;
`;

export const Left = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 10px;
`;
export const Title = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  margin-left: 14px;
`;
export const BoxDescription = styled.View``;
export const Description = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
`;
export const Right = styled.View`
  flex-basis: 100px;
  margin-left: 14px;
  justify-content: space-between;
  align-items: flex-end;
`;
export const DateLabel = styled.Text`
  color: ${props => props.theme.colors.brown400};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
`;
export const BoxStatus = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

interface CheckboxProps {
  complete: boolean;
}
export const Checkbox = styled.View<CheckboxProps>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${props =>
    props.complete ? props.theme.colors.primary : props.theme.colors.gray500};
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
export const LabelStatus = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
`;
