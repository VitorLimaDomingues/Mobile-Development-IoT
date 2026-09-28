export type CharacterClass = 'GUERREIRO' | 'MAGO' | 'ARQUEIRO';
export interface CharacterSheet {
  name: string;
  characterClass: CharacterClass | null;
  level: string;
}

export type Errors = Record<keyof CharacterSheet, string>;
export interface Result {
  valid: boolean;
  errors: Errors;
}

export const CLASSES: CharacterClass[] = ['GUERREIRO', 'MAGO', 'ARQUEIRO'];

export const EMPTY_SHEET: CharacterSheet = { name: '', characterClass: null, level: '' };

export const NO_ERRORS: Errors = { name: '', characterClass: '', level: '' };