import {FunctionComponent} from 'react';

interface ItemHouseProps {
  id: string;
  icon: FunctionComponent;
  name: string;
}

export interface HouseGroupProps {
  selectedItem: string;

  onSelect: (id: string) => void;

  items: ItemHouseProps[];
}
