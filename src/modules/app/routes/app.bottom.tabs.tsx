import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Classes} from '../screens/Classes';
import {Glossary} from '../screens/Glossary';
import {HomeWork} from '../screens/HomeWork';
import {Notifications} from '../screens/Notifications';
import {TabBottomMenu} from '../components/TabBottomMenu';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBottomMenu {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Classes" component={Classes} />
      <Tab.Screen name="Glossary" component={Glossary} />
      <Tab.Screen name="HomeWork" component={HomeWork} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export {BottomTabs};
