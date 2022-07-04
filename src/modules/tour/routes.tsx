import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Introduction} from '@modules/tour/screens/Introduction';

import {useTheme} from 'styled-components';

const TourStack = createStackNavigator();

const TourRoutes = () => {
  const {colors} = useTheme();
  return (
    <TourStack.Navigator
      initialRouteName="Introduction"
      screenOptions={{
        cardStyle: {backgroundColor: colors.gray900},
        headerShown: false,
      }}>
      <TourStack.Screen
        name="Introduction"
        component={Introduction}
        options={{gestureEnabled: false}}
      />
    </TourStack.Navigator>
  );
};
export default TourRoutes;
