import { type JSX } from 'react';
import { View, Text, ScrollView, FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CharacterSheet, RootStackParamList } from '../types';
import { RIVALS } from '../data/rivals';
import { RivalRow, useMountedRows } from '../components/RivalRow';

const RivalsScreen = (): JSX.Element => {
  // o hook entrega a navegação tipada com as rotas do stack da raiz, esteja esta tela onde estiver
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // quantos cartões de rival estão montados agora (o contador vem pronto em components/RivalRow.tsx)
  const mountedRows: number = useMountedRows();

  const open = (rival: CharacterSheet): void => {
    navigation.navigate('Character', { character: rival });
  };

  const renderRival = ({ item }: ListRenderItemInfo<CharacterSheet>): JSX.Element => {
    return <RivalRow rival={item} onPress={open} />;
  }

  // PARTE 1 · LISTA: o map desenha os 480 rivais de uma vez, e a View não rola.
  // 1a: embrulhe o map num ScrollView. 1b: troque ScrollView + map por uma FlatList
  return (
    <View style={styles.screen}>
    
      <Text style={styles.title}>RIVAIS</Text>
      <Text style={styles.counter}>cartões montados: {mountedRows} de {RIVALS.length}</Text>
      <ScrollView style={styles.screen}>
      {RIVALS.map((rival: CharacterSheet) => (
        <RivalRow key={rival.name} rival={rival} onPress={open} />
      ))}
      </ScrollView>
    </View>
  );
};

export default RivalsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10', paddingTop: 24, paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 24, fontWeight: 'bold' },
  counter: { color: '#9A9AA3', fontSize: 13, marginTop: 4, marginBottom: 6 },
  list: { paddingBottom: 24 },
});
