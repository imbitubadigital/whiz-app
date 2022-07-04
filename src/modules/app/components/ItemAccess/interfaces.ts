import {TouchableOpacityProps} from 'react-native';
import {FunctionComponent} from 'react';
export interface Props {
  id: string;
  icon: FunctionComponent<any>;
  label: string;
}
export interface ItemProps extends TouchableOpacityProps {
  item: Props;
}
