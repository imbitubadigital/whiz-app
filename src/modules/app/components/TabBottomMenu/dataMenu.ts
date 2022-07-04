import {HomeIcon} from '@src/components/Icons/HomeIcon';
import {ClassesIcon} from '@src/components/Icons/ClassesIcon';
import {GlossaryIcon} from '@src/components/Icons/GlossaryIcon';
import {HomeWorkIcon} from '@src/components/Icons/HomeWorkIcon';
import {NotificationIcon} from '@src/components/Icons/NotificationIcon';
export const dataMenu = [
  {
    route: 'Home',
    name: 'Home',
    icon: HomeIcon,
    position: 0,
  },
  {
    route: 'Classes',
    name: 'Classes',
    icon: ClassesIcon,
    position: 1,
  },
  {
    route: 'Glossary',
    name: 'Glossary',
    icon: GlossaryIcon,
    position: 2,
  },
  {
    route: 'HomeWork',
    name: 'HW and Test',
    icon: HomeWorkIcon,
    position: 3,
  },
  {
    route: 'Notifications',
    name: 'Notifications',
    icon: NotificationIcon,
    position: 4,
  },
];
