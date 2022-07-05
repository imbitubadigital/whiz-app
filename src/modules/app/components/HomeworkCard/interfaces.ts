import {FunctionComponent} from 'react';
export interface CardProps {
  id: string;
  name: string;
  date: string;
  description: string;
  icon: FunctionComponent;
  complete: boolean;
}
export interface HomeworkCardProps {
  item: CardProps;
}
