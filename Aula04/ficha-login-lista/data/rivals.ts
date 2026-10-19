import { CharacterClass, CharacterSheet } from '../types';

// 24 nomes e 20 epítetos: 480 rivais, muito mais do que cabe numa tela, de propósito
const NAMES: string[] = [
  'Morgana', 'Borin', 'Lyra', 'Kael', 'Thane', 'Elara', 'Dorn', 'Selene',
  'Garruk', 'Nyx', 'Varek', 'Isolde', 'Brom', 'Zephyr', 'Mira', 'Oswin',
  'Freya', 'Ragnar', 'Tamsin', 'Ulric', 'Vesper', 'Wren', 'Yara', 'Corvus',
];

const EPITHETS: string[] = [
  'da Névoa', 'do Norte', 'da Tempestade', 'do Vale', 'da Cinza', 'do Abismo', 'da Aurora',
  'do Deserto', 'da Floresta', 'do Trovão', 'da Lua', 'do Sal', 'da Brasa', 'do Gelo',
  'da Maré', 'do Pântano', 'da Pedra', 'do Crepúsculo', 'da Colina', 'do Vento',
];

const CLASS_CYCLE: CharacterClass[] = ['GUERREIRO', 'MAGO', 'ARQUEIRO'];

// monta a lista combinando cada epíteto com cada nome; classe e nível vão rodando
const buildRivals = (): CharacterSheet[] => {
  const rivals: CharacterSheet[] = [];
  for (let e = 0; e < EPITHETS.length; e += 1) {
    for (let n = 0; n < NAMES.length; n += 1) {
      rivals.push({
        name: `${NAMES[n]} ${EPITHETS[e]}`,
        characterClass: CLASS_CYCLE[(n + e) % CLASS_CYCLE.length],
        level: String(((n * 7 + e * 3) % 20) + 1),
      });
    }
  }
  return rivals;
};

export const RIVALS: CharacterSheet[] = buildRivals();

// sorteia um rival diferente do que já está na tela
export const drawRival = (currentName: string): CharacterSheet => {
  const others: CharacterSheet[] = RIVALS.filter((rival: CharacterSheet) => rival.name !== currentName);
  const index: number = Math.floor(Math.random() * others.length);
  return others[index];
};
