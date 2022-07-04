import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';

import {BottomTabs} from './app.bottom.tabs';

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
        <AppStack.Screen name="BottomTabs" component={BottomTabs} />
      </AppStack.Navigator>
    </>
  );
};

export default HomeDrawer;
