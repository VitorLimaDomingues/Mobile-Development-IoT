import { type JSX } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// troque pelo seu nome
const AUTHOR: string = 'Seu nome aqui';

const AboutScreen = (): JSX.Element => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>SOBRE</Text>
      <Text style={styles.text}>Ficha de Personagem</Text>
      <Text style={styles.text}>Feito por {AUTHOR}</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10', justifyContent: 'center', paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { color: '#EDEDEF', fontSize: 16, marginTop: 10 },
});
