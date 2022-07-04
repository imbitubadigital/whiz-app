import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Item = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  color: ${props => props.theme.colors.gray300};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf12}px;
  margin-top: 4px;
`;

export const Txt = styled.Text``;
