import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';
//import {BottomTabs} from '../bottomTabs/bottomTabs.routes';

import {Home} from '../screens/Home';

const AppStack = createStackNavigator();

const HomeDrawer: React.FC = () => {
  const {colors, title} = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.gray900,
          },
          headerShown: false,
        }}>
        {/* <AppStack.Screen name="homeInitial" component={BottomTabs} /> */}
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </>
  );
};

export default HomeDrawer;
