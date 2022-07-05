import {TouchableOpacityProps} from 'react-native';
export interface TabProps extends TouchableOpacityProps {
  tab: number;
  onClick: (id: number) => void;
}
