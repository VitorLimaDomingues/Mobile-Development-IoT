import { type JSX } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RULES: string[] = [
  'O nome precisa de pelo menos 3 letras',
  'Escolha uma das três classes',
  'O nível vai de 1 a 20',
  'Os rivais são sorteados entre as fichas prontas',
];

const RulesScreen = (): JSX.Element => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>REGRAS</Text>
      {RULES.map((rule: string) => (
        <Text key={rule} style={styles.rule}>• {rule}</Text>
      ))}
    </View>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10', justifyContent: 'center', paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  rule: { color: '#EDEDEF', fontSize: 16, marginTop: 10 },
});
