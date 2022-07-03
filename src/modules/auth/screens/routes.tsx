import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Signin} from '@modules/auth/screens/Signin';
import {SignupStepOne} from '@modules/auth/screens/SignupStepOne';
import {SignupStepTwo} from '@modules/auth/screens/SignupStepTwo';
import {SignupStepThree} from '@modules/auth/screens/SignupStepThree';
import {Subjects} from '@modules/auth/screens/Subjects';

import {useTheme} from 'styled-components';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  const {colors} = useTheme();
  return (
    <AuthStack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        cardStyle: {backgroundColor: colors.gray900},
        headerShown: false,
      }}>
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="SignupStepOne" component={SignupStepOne} />
      <AuthStack.Screen name="SignupStepTwo" component={SignupStepTwo} />
      <AuthStack.Screen name="SignupStepThree" component={SignupStepThree} />
      <AuthStack.Screen name="Subjects" component={Subjects} />
    </AuthStack.Navigator>
  );
};
export default AuthRoutes;
