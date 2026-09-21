import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type LadoDaMoeda = "CARA" | "COROA"

const sortear = (): LadoDaMoeda => {
  return Math.random() < 0.5 ? "CARA" : "COROA"
}

export default function App() {

  // Criando dinamismo para essa tela, rooq
  const [lado, setLado] = useState<LadoDaMoeda | null>(null)
  const [qntCaras, setQntCaras] = useState<number>(0)
  const [qntCoroas, setQntCoroas] = useState<number>(0)

  const jogar = (): void => {
    const resultado: LadoDaMoeda = sortear()
    setLado(resultado)

    if (resultado === "CARA") {
      setQntCaras(qntCaras + 1)
    }

    if (resultado === "COROA") {
      setQntCoroas(atual => atual + 1)
    }
  }

  const zerar = (): void => {
    setQntCaras(0)
    setQntCoroas(0)
  }


  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>{lado ?? 'Jogue'}</Text>
      <Text style={styles.placar}>caras {qntCaras} - coroas {qntCoroas}</Text>
      
      <TouchableOpacity style={styles.botao} onPress={jogar}>
        <Text style={styles.textoBotao}>Jogar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botaoZerar} onPress={zerar}>
        <Text>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E0E10"
  },
  titulo: { color: '#ED145B', fontSize: 64, fontWeight: 'bold'},
  placar: { color: "#fff", fontSize: 16, marginTop: 12},
  botao: {
    backgroundColor: '#ED145B',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 999,
    marginTop: 32
  },
  botaoZerar: {
    backgroundColor: "#149ded",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 999,
    marginTop: 32
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
 