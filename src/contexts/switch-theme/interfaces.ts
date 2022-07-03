import {DefaultTheme} from 'styled-components/native';

export interface ThemeContextData {
  themeData: DefaultTheme;
  settingTheme(newTheme: string): Promise<void>;
  themeType: string;
}
