import {FunctionComponent} from 'react';
import {TouchableOpacityProps} from 'react-native';

interface IPropsItem {
  route: string;
  name: string;
  icon: FunctionComponent<any>;
  position: number;
}
export interface IPropsItemMenu extends TouchableOpacityProps {
  active: boolean;

  item: IPropsItem;
}
