import Herbolody from '@assets/herbolody.svg';
import Magic from '@assets/magic.svg';
import TestTube from '@assets/tube.svg';
import Star from '@assets/star.svg';

export const dataHomeWork = [
  {
    id: '1',
    name: 'Potions',
    date: 'Due 02/04',
    description:
      '1000-word dissertation on ingredients used on certain potions',
    icon: TestTube,
    complete: false,
  },
  {
    id: '2',
    name: 'Herbology',
    date: 'Due 02/08',
    description: '1000-word dissertation on the history of Transfiguration',
    icon: Herbolody,
    complete: true,
  },
  {
    id: '3',
    name: 'Divination',
    date: 'Due 02/10',
    description: 'Study a classmate’s astral birth chart',
    icon: Star,
    complete: true,
  },
  {
    id: '4',
    name: 'Charms',
    date: 'Due 02/15',
    description: 'Successfully attempt to levitate a feather',
    icon: Magic,
    complete: false,
  },
];

export const dataTests = [
  {
    id: '1',
    name: 'Divination test',
    date: '02/25 - 1PM',
    icon: TestTube,
  },
  {
    id: '2',
    name: 'Potions test',
    date: '02/25 - 1PM',
    icon: Star,
  },
  {
    id: '3',
    name: 'Charms test',
    date: '02/25 - 1PM',
    icon: Magic,
  },
  {
    id: '4',
    name: 'Herbolody test',
    date: '02/25 - 1PM',
    icon: Herbolody,
  },
];
