import {ReactNode} from 'react';

export interface TitleProps {
  children: ReactNode;

  type?: 'normal' | 'highlight';
}
