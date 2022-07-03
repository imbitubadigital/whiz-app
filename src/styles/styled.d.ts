import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;
    font: {
      KumbhSans200ExtraLight: string;
      KumbhSans400Regular: string;
      KumbhSans700Bold: string;
    };

    size: {
      rf10: number;
      rf12: number;
      rf14: number;
      rf16: number;
      rf18: number;
      rf20: number;
      rf22: number;
      rf24: number;
      rf26: number;
      rf28: number;
      rf30: number;
      rf32: number;
      rf48: number;
    };

    colors: {
      gray100: string;
      gray200: string;
      gray300: string;
      gray500: string;
      gray600: string;
      gray900: string;

      purple500: string;

      primary: string;
      secondary: string;
      tertiary: string;
      danger: string;
    };
  }
}
