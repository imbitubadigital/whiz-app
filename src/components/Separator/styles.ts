import styled from 'styled-components/native';

interface PropsView {
  height: number;
  visible: boolean;
}
export const Container = styled.View<PropsView>`
  height: ${props => props.height}px;
  background: ${props => (props.visible ? 'yellow' : 'transparent')};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Txt = styled.Text`
  color: red;
`;
