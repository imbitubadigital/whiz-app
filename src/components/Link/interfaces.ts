import {TouchableOpacityProps} from 'react-native';

export interface LinkProps extends TouchableOpacityProps {
  label: string;
  align?: 'left' | 'center' | 'right';
}
