import { useState, type JSX } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, StyleSheet,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  CharacterClass, CharacterSheet, Errors, Result, CLASSES, EMPTY_SHEET, NO_ERRORS, RootStackParamList,
} from '../types';
import { validateSheet } from '../validateSheet';

const CreateScreen = (): JSX.Element => {
  // o hook entrega a navegação tipada com as rotas do stack da raiz, esteja esta tela onde estiver
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [sheet, setSheet] = useState<CharacterSheet>(EMPTY_SHEET);
  const [errors, setErrors] = useState<Errors>(NO_ERRORS);

  const changeName = (text: string): void => {
    setSheet((current) => ({ ...current, name: text }));
    setErrors((current) => ({ ...current, name: '' }));
  };

  const changeClass = (chosen: CharacterClass): void => {
    setSheet((current) => ({ ...current, characterClass: chosen }));
    setErrors((current) => ({ ...current, characterClass: '' }));
  };

  const changeLevel = (text: string): void => {
    setSheet((current) => ({ ...current, level: text }));
    setErrors((current) => ({ ...current, level: '' }));
  };

  const showCharacter = (): void => {
    // TRIGGER 3: abrir a rota Character, levando a ficha que acabou de ser criada (sheet).
    navigation.navigate('Character', {character: sheet})
  };

  const submit = (): void => {
    const result: Result = validateSheet(sheet);
    setErrors(result.errors);
    if (!result.valid) {
      return;
    }
    // cada botão do Alert faz uma coisa: limpar o formulário ou mostrar o personagem
    Alert.alert('Personagem criado', sheet.name.trim(), [
      { text: 'Criar outro', onPress: () => setSheet(EMPTY_SHEET) },
      { text: 'Ver personagem', onPress: showCharacter },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do personagem"
          placeholderTextColor="#9A9AA3"
          value={sheet.name}
          onChangeText={changeName}
        />
        {errors.name !== '' && <Text style={styles.error}>{errors.name}</Text>}

        <Text style={styles.label}>Classe</Text>
        <View style={styles.options}>
          {CLASSES.map((characterClass: CharacterClass) => (
            <TouchableOpacity
              key={characterClass}
              style={[styles.option, sheet.characterClass === characterClass && styles.optionActive]}
              onPress={() => changeClass(characterClass)}>
              <Text style={styles.optionText}>{characterClass}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {errors.characterClass !== '' && <Text style={styles.error}>{errors.characterClass}</Text>}

        <Text style={styles.label}>Nível</Text>
        <TextInput
          style={styles.input}
          placeholder="1 a 20"
          placeholderTextColor="#9A9AA3"
          keyboardType="numeric"
          value={sheet.level}
          onChangeText={changeLevel}
        />
        {errors.level !== '' && <Text style={styles.error}>{errors.level}</Text>}

        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>CRIAR PERSONAGEM</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10' },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  label: { color: '#9A9AA3', fontSize: 12, marginTop: 16, marginBottom: 6 },
  input: { backgroundColor: '#17171B', borderWidth: 1, borderColor: '#2A2A31', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, color: '#EDEDEF', fontSize: 16 },
  error: { color: '#FF4D94', fontSize: 12, marginTop: 6 },
  options: { flexDirection: 'row', gap: 8 },
  option: { borderWidth: 1, borderColor: '#2A2A31', borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14 },
  optionActive: { borderColor: '#ED145B', backgroundColor: 'rgba(237,20,91,0.15)' },
  optionText: { color: '#EDEDEF', fontSize: 12 },
  button: { backgroundColor: '#ED145B', borderRadius: 999, paddingVertical: 14, alignItems: 'center', marginTop: 32 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
