import {RFValue} from 'react-native-responsive-fontsize';

import {DefaultTheme} from 'styled-components/native';

const standardScreenHeight = 680;

export const Common: DefaultTheme = {
  title: 'dark',

  font: {
    KumbhSans200ExtraLight: 'KumbhSans_200ExtraLight',
    KumbhSans400Regular: 'KumbhSans_400Regular',
  },

  size: {
    rf10: RFValue(8, standardScreenHeight),
    rf12: RFValue(10, standardScreenHeight),
    rf14: RFValue(12, standardScreenHeight),
    rf16: RFValue(14, standardScreenHeight),
    rf18: RFValue(16, standardScreenHeight),
    rf20: RFValue(18, standardScreenHeight),
    rf22: RFValue(20, standardScreenHeight),
    rf24: RFValue(22, standardScreenHeight),
    rf26: RFValue(24, standardScreenHeight),
    rf28: RFValue(26, standardScreenHeight),
    rf30: RFValue(28, standardScreenHeight),
    rf32: RFValue(30, standardScreenHeight),
    rf48: RFValue(46, standardScreenHeight),
  },

  colors: {
    gray100: '#FFFFFF',
    gray200: '#C9BECD',
    gray300: '#AA9DAF',
    gray500: '#716875',
    gray900: '#231E25',

    primary: '#33CD83',
    secondary: '#5C3A77',
    tertiary: '#6581CB',
  },
};
