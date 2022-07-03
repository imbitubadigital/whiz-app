import {TouchableOpacityProps} from 'react-native';
import {FunctionComponent} from 'react';

interface SubjectItem {
  id: string;
  icon: FunctionComponent;
  name: string;
}

export interface SubjectProps extends TouchableOpacityProps {
  selected: boolean;

  item: SubjectItem;
}
