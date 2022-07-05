import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';
import {Profile} from './';

import {ProfileClass} from '../ProfileClass';
import {ProfileGrade} from '../ProfileGrade';

const AppStack = createStackNavigator();

const ProfileStack: React.FC = () => {
  const {colors, title} = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppStack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.gray900,
          },
          headerShown: false,
        }}>
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="ProfileClass" component={ProfileClass} />
        <AppStack.Screen name="ProfileGrade" component={ProfileGrade} />
      </AppStack.Navigator>
    </>
  );
};

export default ProfileStack;
