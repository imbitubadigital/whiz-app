import {TextInputProps} from 'react-native';

import {FunctionComponent} from 'react';

export interface InputProps extends TextInputProps {
  erro?: string;
  name: string;
  defaultValue?: string;
  control: any;
  icon: FunctionComponent;
}
