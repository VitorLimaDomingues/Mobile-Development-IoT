import { type JSX } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAV_THEME } from './theme';
import { RootStackParamList } from './types';
import Placeholder from './components/Placeholder';
import LoginScreen from './screens/LoginScreen';
import CreateScreen from './screens/CreateScreen';
import CharacterScreen from './screens/CharacterScreen';
import AdventureTabs from './navigation/AdventureTabs';
import HomeDrawer from './navigation/HomeDrawer';

// Os imports já estão prontos. A navegação a gente monta em aula, uma peça por vez.

// PEÇA 1 · STACK: crie aqui o navigator do stack

const App = (): JSX.Element => {
  return (
    <NavigationContainer theme={NAV_THEME}>
      <StatusBar style="light" />
      {/* PEÇA 1 · STACK: troque o Placeholder pelo Stack.Navigator, com uma Stack.Screen por tela */}
      <Placeholder text="Peça 1: monte o stack no App.tsx" />
    </NavigationContainer>
  );
};

export default App;
