export type CharacterClass = 'GUERREIRO' | 'MAGO' | 'ARQUEIRO';

export interface CharacterSheet {
  name: string;
  characterClass: CharacterClass | null;
  level: string;
}

// um texto de erro para cada campo da ficha; vazio quer dizer sem erro
export type Errors = Record<keyof CharacterSheet, string>;

export interface Result {
  valid: boolean;
  errors: Errors;
}

export const CLASSES: CharacterClass[] = ['GUERREIRO', 'MAGO', 'ARQUEIRO'];

export const EMPTY_SHEET: CharacterSheet = { name: '', characterClass: null, level: '' };

export const NO_ERRORS: Errors = { name: '', characterClass: '', level: '' };

// ROTAS: um tipo por navigator, com o nome de cada tela e o que ela recebe.
// undefined quer dizer "esta tela não recebe nada"

// o stack da raiz
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Character: { character: CharacterSheet };
};

// o drawer, que mora dentro de Home
export type DrawerParamList = {
  Adventure: undefined;
  Rules: undefined;
  About: undefined;
};

// as tabs, que moram dentro de Adventure
export type TabParamList = {
  Create: undefined;
  Rivals: undefined;
};
