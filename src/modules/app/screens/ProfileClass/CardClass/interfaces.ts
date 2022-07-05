import {TouchableOpacityProps} from 'react-native';
import {FunctionComponent} from 'react';

export interface ClassProps {
  id: string;
  name: string;
  date: string;
  status: string;
  icon: FunctionComponent;
}

export interface CardClassProps extends TouchableOpacityProps {
  item: ClassProps;
}
