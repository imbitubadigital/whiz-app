import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Text} from 'react-native';
import {
  useFonts,
  KumbhSans_200ExtraLight,
  KumbhSans_400Regular,
  KumbhSans_700Bold,
} from '@expo-google-fonts/kumbh-sans';

import {NavigationContainer} from '@react-navigation/native';
import {SwitchThemeProvider} from '@contexts/switch-theme';

import AppRoutes from '@routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    KumbhSans_200ExtraLight,
    KumbhSans_400Regular,
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fonts</Text>;
  }
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <SwitchThemeProvider>
        <AppRoutes />
      </SwitchThemeProvider>
    </NavigationContainer>
  );
}
