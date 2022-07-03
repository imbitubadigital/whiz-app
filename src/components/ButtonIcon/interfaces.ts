import {FunctionComponent} from 'react';
import {TouchableOpacityProps} from 'react-native';
export interface ButtonIconProps extends TouchableOpacityProps {
  icon: FunctionComponent;
  bg?: boolean;
}
