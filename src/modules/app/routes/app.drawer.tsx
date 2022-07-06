import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerMenu} from '../components/DrawerMenu';
import HomeDrawer from './app.stack';

import ProfileStack from '../screens/Profile/routes';
import {useTheme} from 'styled-components';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  const {colors} = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="homeDrawer"
      defaultScreenOptions={{
        sceneContainerStyle: {backgroundColor: colors.gray900},
      }}
      screenOptions={{
        headerShown: false,
        sceneContainerStyle: {backgroundColor: colors.gray900},
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
    </Drawer.Navigator>
  );
}

export {AppDrawer};
