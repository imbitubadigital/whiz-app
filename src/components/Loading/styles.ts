import styled from 'styled-components/native';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.gray900};
`;

export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.primary,
}))``;
