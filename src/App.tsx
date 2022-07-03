import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';
// import {
//   useFonts,
//   Montserrat_300Light,
//   Montserrat_400Regular,
//   Montserrat_500Medium,
//   Montserrat_600SemiBold,
//   Montserrat_700Bold,
//   Montserrat_900Black,
// } from '@expo-google-fonts/montserrat';

// import {
//   //  Karla_200ExtraLight,
//   //  Karla_300Light,
//   Karla_400Regular,
//   Karla_500Medium,
//   //  Karla_600SemiBold,
//   Karla_700Bold,
//   //  Karla_800ExtraBold,
//   //  Karla_200ExtraLight_Italic,
//   // Karla_300Light_Italic,
//   //  Karla_400Regular_Italic,
//   //  Karla_500Medium_Italic,
//   //  Karla_600SemiBold_Italic,
//   //  Karla_700Bold_Italic,
//   //  Karla_800ExtraBold_Italic,
// } from '@expo-google-fonts/karla';
import {NavigationContainer} from '@react-navigation/native';
import {SwitchThemeProvider} from '@contexts/switch-theme';

// import {AppProvider} from '@contexts';

import AppRoutes from '@routes';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Montserrat_300Light,
  //   Montserrat_400Regular,
  //   Montserrat_500Medium,
  //   Montserrat_600SemiBold,
  //   Montserrat_700Bold,
  //   Montserrat_900Black,
  //   Karla_400Regular,
  //   Karla_500Medium,
  //   Karla_700Bold,
  // });

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
