import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 14px;
  border-radius: 5px;
  background: ${props => props.theme.colors.gray600};
  height: 50px;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelLeft = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  margin-left: 14px;
`;
export const Right = styled.View``;

interface HighlightProps {
  highlight: boolean;
}
export const LabelRight = styled.Text<HighlightProps>`
  color: ${props =>
    props.highlight ? props.theme.colors.primary : props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
`;
