import {FunctionComponent} from 'react';

interface ItemHouseProps {
  id: string;
  icon: FunctionComponent;
}

export interface HouseGroupProps {
  selectedItem: string;

  onSelect: (id: string) => void;

  items: ItemHouseProps[];
}
