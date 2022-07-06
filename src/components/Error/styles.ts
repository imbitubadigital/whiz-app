import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 18px;
`;

export const TextError = styled.Text`
  font-family: ${props => props.theme.font.KumbhSans200ExtraLight};
  color: ${props => props.theme.colors.brown400};
  font-size: ${props => props.theme.size.rf14}px;
`;
