import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerMenu} from '../components/DrawerMenu';
import HomeDrawer from './app.stack';
import {Profile} from '../screens/Profile';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="homeDrawer"
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export {AppDrawer};
