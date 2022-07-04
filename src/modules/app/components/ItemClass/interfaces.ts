import {FunctionComponent} from 'react';
export interface Props {
  id: string;
  icon: FunctionComponent<any>;
  labelLeft: string;
  labelRight: string;
}
export interface ItemProps {
  item: Props;
}
