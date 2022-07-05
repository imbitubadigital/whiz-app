import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerMenu} from '../components/DrawerMenu';
import HomeDrawer from './app.stack';

import ProfileStack from '../screens/Profile/routes';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="homeDrawer"
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
    </Drawer.Navigator>
  );
}

export {AppDrawer};
