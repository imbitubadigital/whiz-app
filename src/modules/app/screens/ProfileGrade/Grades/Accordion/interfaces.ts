import {FunctionComponent} from 'react';
export interface ItemProps {
  id: string;
  title: string;
  date: string;
}
export interface GradeProps {
  id: string;
  title: string;
  score: string;
  icon: FunctionComponent<any>;
  items: ItemProps[];
}
export interface AccordionProps {
  item: GradeProps;
  isOpen: boolean;
  position: string;

  onChange: (position: string) => void;
}
