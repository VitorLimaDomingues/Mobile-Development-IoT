import { type JSX } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAV_THEME } from './theme';
import { RootStackParamList } from './types';
import LoginScreen from './screens/LoginScreen';
import HomeDrawer from './navigation/HomeDrawer';
import CharacterScreen from './screens/CharacterScreen';

// STACK: uma tela por cima da outra. É a raiz do app
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer theme={NAV_THEME}>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeDrawer} options={{ headerShown: false, title: 'Início' }} />
        <Stack.Screen
          name="Character"
          component={CharacterScreen}
          options={({ route }) => ({ title: route.params.character.name.trim() })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
