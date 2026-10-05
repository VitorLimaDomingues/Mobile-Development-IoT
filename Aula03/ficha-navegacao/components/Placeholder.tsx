import { type JSX } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlaceholderProps {
  text: string;
}

// aviso que ocupa o lugar de uma peça que ainda não foi montada
const Placeholder = ({ text }: PlaceholderProps): JSX.Element => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>FICHA DE PERSONAGEM</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Placeholder;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10', justifyContent: 'center', paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 24, fontWeight: 'bold' },
  text: { color: '#9A9AA3', fontSize: 16, marginTop: 12 },
});
