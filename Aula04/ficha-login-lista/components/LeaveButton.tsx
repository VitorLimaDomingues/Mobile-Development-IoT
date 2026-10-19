import { type JSX } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { clearPlayer } from '../storage';

// o botão SAIR do header. Ele não mora em tela nenhuma, por isso pega a navegação pelo hook
const LeaveButton = (): JSX.Element => {
  const navigation = useNavigation();

  const leave = async (): Promise<void> => {
    // PARTE 3 · SAIR: apagar o nome salvo (clearPlayer) e trocar o app pelo login.
    // Esta tela mora no drawer, que não tem replace: a ação sobe até o stack da raiz
    navigation.dispatch(StackActions.replace('Login'));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={leave}>
      <Text style={styles.text}>SAIR</Text>
    </TouchableOpacity>
  );
};

export default LeaveButton;

const styles = StyleSheet.create({
  button: { borderWidth: 1, borderColor: '#2A2A31', borderRadius: 999, paddingVertical: 6, paddingHorizontal: 14, marginRight: 12 },
  text: { color: '#EDEDEF', fontSize: 12, fontWeight: 'bold' },
});
