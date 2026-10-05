import { CharacterSheet } from '../types';

export const RIVALS: CharacterSheet[] = [
  { name: 'Morgana', characterClass: 'MAGO', level: '12' },
  { name: 'Borin', characterClass: 'GUERREIRO', level: '9' },
  { name: 'Lyra', characterClass: 'ARQUEIRO', level: '15' },
  { name: 'Kael', characterClass: 'GUERREIRO', level: '18' },
];

// sorteia um rival diferente do que já está na tela
export const drawRival = (currentName: string): CharacterSheet => {
  const others: CharacterSheet[] = RIVALS.filter((rival: CharacterSheet) => rival.name !== currentName);
  const index: number = Math.floor(Math.random() * others.length);
  return others[index];
};
