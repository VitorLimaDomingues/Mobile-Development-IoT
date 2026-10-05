import { useState, type JSX } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { validatePlayer } from '../validatePlayer';

// navigation chega pronto e tipado para a rota Login
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props): JSX.Element => {
  const [player, setPlayer] = useState<string>('');
  const [error, setError] = useState<string>('');

  const changePlayer = (text: string): void => {
    setPlayer(text);
    setError('');
  };

  const enter = (): void => {
    const message: string = validatePlayer(player);
    setError(message);
    if (message !== '') {
      return;
    }
    
    navigation.navigate('Home')
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Text style={styles.title}>FICHA DE PERSONAGEM</Text>
        <Text style={styles.subtitle}>quem está jogando?</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#9A9AA3"
          value={player}
          onChangeText={changePlayer}
        />
        {error !== '' && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={enter}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10' },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#9A9AA3', fontSize: 14, marginTop: 8, marginBottom: 24 },
  input: { backgroundColor: '#17171B', borderWidth: 1, borderColor: '#2A2A31', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, color: '#EDEDEF', fontSize: 16 },
  error: { color: '#FF4D94', fontSize: 12, marginTop: 6 },
  button: { backgroundColor: '#ED145B', borderRadius: 999, paddingVertical: 14, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
