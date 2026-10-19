import { useState, useEffect, type JSX } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CharacterSheet } from '../types';

// CONTADOR: quantos cartões de rival estão montados (vivos na memória) neste momento.
// Cada RivalRow soma 1 quando monta e subtrai 1 quando desmonta; a tela mostra o total
let mounted: number = 0;
const listeners: Set<(count: number) => void> = new Set();

const notify = (): void => {
  listeners.forEach((listener: (count: number) => void) => {
    listener(mounted);
  });
};

// a tela usa este hook para mostrar o total; ele atualiza sozinho quando o número muda
export const useMountedRows = (): number => {
  const [count, setCount] = useState<number>(mounted);
  useEffect(() => {
    listeners.add(setCount);
    // os cartões montam antes da tela terminar de se ligar: pega o total que já existe
    setCount(mounted);
    return () => {
      listeners.delete(setCount);
    };
  }, []);
  return count;
};

interface RivalRowProps {
  rival: CharacterSheet;
  onPress: (rival: CharacterSheet) => void;
}

// o cartão de um rival: o mesmo desenho da Aula 7, agora num componente que se conta
export const RivalRow = ({ rival, onPress }: RivalRowProps): JSX.Element => {
  useEffect(() => {
    mounted += 1;
    notify();
    return () => {
      mounted -= 1;
      notify();
    };
  }, []);

  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(rival)}>
      <Text style={styles.name}>{rival.name}</Text>
      <Text style={styles.detail}>{rival.characterClass} · nível {rival.level}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: { backgroundColor: '#17171B', borderWidth: 1, borderColor: '#2A2A31', borderRadius: 10, padding: 14, marginTop: 10 },
  name: { color: '#EDEDEF', fontSize: 16, fontWeight: 'bold' },
  detail: { color: '#9A9AA3', fontSize: 13, marginTop: 4 },
});
