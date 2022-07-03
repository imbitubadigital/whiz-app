import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {SignupStepOne} from '@modules/auth/screens/SignupStepOne';

import {useTheme} from 'styled-components';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  const {colors} = useTheme();
  return (
    <AuthStack.Navigator
      initialRouteName="SignupStepOne"
      screenOptions={{
        cardStyle: {backgroundColor: colors.gray900},
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignupStepOne" component={SignupStepOne} />
    </AuthStack.Navigator>
  );
};
export default AuthRoutes;
