import styled from 'styled-components/native';

interface PropsTitle {
  type: 'normal' | 'highlight';
}
export const Title = styled.Text<PropsTitle>`
  text-align: center;
  font-size: ${props => props.theme.size.rf24}px;
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  color: ${props =>
    props.type === 'normal'
      ? props.theme.colors.gray200
      : props.theme.colors.purple500};
`;
