import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from '@modules/auth/routes';
import TourStack from '@modules/tour/routes';
import {AppDrawer} from '@src/modules/app/routes/app.drawer';
import {useAuth} from '@src/contexts/auth';
import {Loading} from '@src/components/Loading';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const {loadingStorage, user} = useAuth();

  const {tour, isLogged} = user;

  if (loadingStorage) {
    return <Loading />;
  }

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!tour ? (
        <AppStack.Screen name="TourStack" component={TourStack} />
      ) : !isLogged ? (
        <AppStack.Screen name="AuthRoutes" component={AuthStack} />
      ) : (
        <AppStack.Screen name="AppDrawer" component={AppDrawer} />
      )}
    </AppStack.Navigator>
  );
};

export default AppRoutes;
