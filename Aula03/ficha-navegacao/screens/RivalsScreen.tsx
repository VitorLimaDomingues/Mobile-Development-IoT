import { type JSX } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CharacterSheet, RootStackParamList } from '../types';
import { RIVALS } from '../data/rivals';

const RivalsScreen = (): JSX.Element => {
  // o hook entrega a navegação tipada com as rotas do stack da raiz, esteja esta tela onde estiver
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const open = (rival: CharacterSheet): void => {
    // TRIGGER 2: abrir a rota Character, levando este rival como parâmetro.
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>RIVAIS</Text>
      {RIVALS.map((rival: CharacterSheet) => (
        <TouchableOpacity key={rival.name} style={styles.row} onPress={() => open(rival)}>
          <Text style={styles.name}>{rival.name}</Text>
          <Text style={styles.detail}>{rival.characterClass} · nível {rival.level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RivalsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10', justifyContent: 'center', paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  row: { backgroundColor: '#17171B', borderWidth: 1, borderColor: '#2A2A31', borderRadius: 10, padding: 14, marginTop: 10 },
  name: { color: '#EDEDEF', fontSize: 16, fontWeight: 'bold' },
  detail: { color: '#9A9AA3', fontSize: 13, marginTop: 4 },
});
