import {FunctionComponent} from 'react';
export interface PropsHeader {
  title?: string;
  subtitle?: string;
  componentLeft?: FunctionComponent;
  componentRight?: FunctionComponent;
  noBorder?: boolean;
}
