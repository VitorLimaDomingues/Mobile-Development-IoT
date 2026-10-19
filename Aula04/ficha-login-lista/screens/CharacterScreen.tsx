import { useState, type JSX } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CharacterSheet, RootStackParamList } from '../types';
import { drawRival } from '../data/rivals';

// navigation e route chegam prontos e tipados para a rota Character
type Props = NativeStackScreenProps<RootStackParamList, 'Character'>;

const CharacterScreen = ({ route, navigation }: Props): JSX.Element => {
  // o personagem que quem navegou mandou junto
  const character: CharacterSheet = route.params.character;
  // quantas telas estão vivas no stack neste momento
  const stackSize: number = navigation.getState().routes.length;
  // a foto escolhida na galeria; null enquanto não há foto
  const [photo, setPhoto] = useState<string | null>(null);

  const rival = (): void => {
    const next: CharacterSheet = drawRival(character.name);
    navigation.push('Character', { character: next });
  };

  const back = (): void => {
    navigation.goBack();
  };

  const home = (): void => {
    navigation.popToTop();
  };

  const pickPhoto = async (): Promise<void> => {
    // EXTRA · FOTO: abrir a galeria com o expo-image-picker e guardar a uri da foto escolhida (setPhoto)
  };

  return (
    <View style={styles.screen}>
      {photo !== null && <Image source={{ uri: photo }} style={styles.photo} />}
      <Text style={styles.name}>{character.name.trim()}</Text>
      <Text style={styles.detail}>{character.characterClass} · nível {Number(character.level)}</Text>
      <Text style={styles.stack}>telas no stack: {stackSize}</Text>
      <TouchableOpacity style={styles.button} onPress={rival}>
        <Text style={styles.buttonText}>SORTEAR RIVAL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} onPress={pickPhoto}>
        <Text style={styles.secondaryText}>FOTO DA GALERIA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} onPress={back}>
        <Text style={styles.secondaryText}>VOLTAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} onPress={home}>
        <Text style={styles.secondaryText}>INÍCIO DO STACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10', justifyContent: 'center', paddingHorizontal: 28 },
  photo: { width: 120, height: 120, borderRadius: 60, marginBottom: 16, borderWidth: 2, borderColor: '#ED145B' },
  name: { color: '#ED145B', fontSize: 32, fontWeight: 'bold' },
  detail: { color: '#EDEDEF', fontSize: 16, marginTop: 8 },
  stack: { color: '#9A9AA3', fontSize: 14, marginTop: 16 },
  button: { backgroundColor: '#ED145B', borderRadius: 999, paddingVertical: 14, alignItems: 'center', marginTop: 32 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  secondary: { borderWidth: 1, borderColor: '#2A2A31', borderRadius: 999, paddingVertical: 12, alignItems: 'center', marginTop: 12 },
  secondaryText: { color: '#EDEDEF', fontSize: 14, fontWeight: 'bold' },
});
