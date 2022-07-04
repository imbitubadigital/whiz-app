import {FunctionComponent} from 'react';
export interface PropsItem {
  id: string;
  label: string;
  icon: FunctionComponent;
}
export interface PropsTour {
  item: PropsItem;
}
