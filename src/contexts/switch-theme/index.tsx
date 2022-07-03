import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {config} from '@configs';
import {DarkTheme} from '@styles/themes/dark';
import {LightTheme} from '@styles/themes/light';
import {ThemeContextData} from './interfaces';

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const keyAsyncStorageTheme = `${config.keyAsyncStorage}:theme`;

const SwitchThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [themeType, setThemeType] = useState<string>('dark');

  useEffect(() => {
    async function loadStorageTheme(): Promise<void> {
      const themeStorage = await AsyncStorage.getItem(keyAsyncStorageTheme);
      if (themeStorage) {
        setThemeType(themeStorage === 'light' ? 'light' : 'dark');
      }
    }
    loadStorageTheme();
  }, []);

  const settingTheme = useCallback(async (newTheme: string) => {
    await AsyncStorage.setItem(keyAsyncStorageTheme, newTheme);
    setThemeType(newTheme === 'light' ? 'light' : 'dark');
  }, []);

  const themeData =
    !themeType || themeType === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider
      value={{
        settingTheme,
        themeData,
        themeType,
      }}>
      <ThemeProvider theme={themeData}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useSwitchTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
export {SwitchThemeProvider, useSwitchTheme, keyAsyncStorageTheme};
