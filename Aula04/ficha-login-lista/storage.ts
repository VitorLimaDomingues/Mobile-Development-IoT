// PARTE 2 · o import do AsyncStorage entra aqui, depois do npx expo install
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validatePlayer } from './validatePlayer';


// a chave: o nome da gaveta onde o nome de quem joga fica guardado no celular
const PLAYER_KEY: string = 'player';

// PARTE 2 · LEMBRAR O LOGIN: as três funções que falam com o AsyncStorage.
// Cada uma é uma linha. Tudo que fala com o disco é assíncrono: await sempre.

export const savePlayer = async (name: string): Promise<void> => {
  await AsyncStorage.setItem(PLAYER_KEY, name)
};

export const loadPlayer = async (): Promise<string | null> => {
  return AsyncStorage.getItem(PLAYER_KEY);
};

export const clearPlayer = async (): Promise<void> => {
  // PARTE 3 · SAIR: apagar o que está guardado na chave PLAYER_KEY
};
