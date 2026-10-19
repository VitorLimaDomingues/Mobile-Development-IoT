import { CharacterSheet, Errors, Result, NO_ERRORS } from './types';

export const validateSheet = (sheet: CharacterSheet): Result => {
  const errors: Errors = { ...NO_ERRORS };
  const level: number = Number(sheet.level);

  if (sheet.name.trim().length < 3) {
    errors.name = 'Mínimo de 3 letras';
  }
  if (sheet.characterClass === null) {
    errors.characterClass = 'Escolha uma classe';
  }
  if (sheet.level.trim() === '' || !Number.isInteger(level) || level < 1 || level > 20) {
    errors.level = 'Nível de 1 a 20';
  }

  const valid: boolean = errors.name === '' && errors.characterClass === '' && errors.level === '';
  return { valid, errors };
};
