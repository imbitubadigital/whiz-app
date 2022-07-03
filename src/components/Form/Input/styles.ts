import styled from 'styled-components/native';

import {TextInput} from 'react-native';

export const Container = styled.View``;

interface ContainerInputProps {
  isError: boolean;
}
export const ContainerInput = styled.View<ContainerInputProps>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-width: 1px;
  border-color: ${props =>
    props.isError ? props.theme.colors.purple500 : props.theme.colors.gray600};
  background: ${props => props.theme.colors.gray600};
  height: 56px;
  border-radius: 10px;
  padding: 0 20px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  color: ${props => props.theme.colors.gray200};
  font-family: ${props => props.theme.font.KumbhSans400Regular};
  font-size: ${props => props.theme.size.rf14}px;
  height: 28px;

  margin-left: 10px;
`;
