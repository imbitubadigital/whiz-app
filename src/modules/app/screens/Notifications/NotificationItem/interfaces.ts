import {TouchableOpacityProps} from 'react-native';
import {FunctionComponent} from 'react';

export interface NotificationProps {
  id: string;
  label: string;
  icon: FunctionComponent;
  read: boolean;
}
export interface NotificationItemProps extends TouchableOpacityProps {
  item: NotificationProps;
}
