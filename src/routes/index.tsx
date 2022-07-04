import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//import AuthStack from '@modules/auth/routes';
import TourStack from '@modules/tour/routes';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  // const {loadingStorage, data} = useAuth();

  // const {accessToken, user} = data;

  // const terms = user?.hasAcceptedTerms ? true : false;

  // if (loadingStorage) {
  //   return <Loading />;
  // }

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="TourStack" component={TourStack} />
      {/* <AppStack.Screen name="AuthRoutes" component={AuthStack} /> */}
    </AppStack.Navigator>
  );
};

export default AppRoutes;
