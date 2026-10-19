// PARTE 2 · o import do AsyncStorage entra aqui, depois do npx expo install

// a chave: o nome da gaveta onde o nome de quem joga fica guardado no celular
const PLAYER_KEY: string = 'player';

// PARTE 2 · LEMBRAR O LOGIN: as três funções que falam com o AsyncStorage.
// Cada uma é uma linha. Tudo que fala com o disco é assíncrono: await sempre.

export const savePlayer = async (name: string): Promise<void> => {
  // PARTE 2a: guardar o nome na chave PLAYER_KEY
};

export const loadPlayer = async (): Promise<string | null> => {
  // PARTE 2a: devolver o que está guardado na chave PLAYER_KEY (null quando não há nada)
  return null;
};

export const clearPlayer = async (): Promise<void> => {
  // PARTE 3 · SAIR: apagar o que está guardado na chave PLAYER_KEY
};
