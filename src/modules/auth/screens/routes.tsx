import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Signup} from '@modules/auth/screens/Signup';

import {useTheme} from 'styled-components';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  const {colors} = useTheme();
  return (
    <AuthStack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        cardStyle: {backgroundColor: colors.gray900},
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignUp" component={Signup} />
    </AuthStack.Navigator>
  );
};
export default AuthRoutes;
