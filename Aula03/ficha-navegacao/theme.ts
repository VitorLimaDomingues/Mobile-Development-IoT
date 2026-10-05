import { DarkTheme, Theme } from '@react-navigation/native';

// o tema escuro da navegação com as cores do app: header, tab bar e drawer usam estas cores sozinhos
export const NAV_THEME: Theme = {
  ...DarkTheme,
  colors: {
    primary: '#ED145B',
    background: '#0E0E10',
    card: '#17171B',
    text: '#EDEDEF',
    border: '#2A2A31',
    notification: '#ED145B',
  },
};
