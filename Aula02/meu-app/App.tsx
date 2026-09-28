import { StatusBar } from 'expo-status-bar';
import { CharacterClass, CLASSES, EMPTY_SHEET, CharacterSheet, Errors, NO_ERRORS, Result } from './types'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [sheet, setSheet ] = useState<CharacterSheet>(EMPTY_SHEET)
  const [errors, setErrors ] = useState<Errors>({...NO_ERRORS})

  const changeClass= (selectedClass: CharacterClass): void => {
    setSheet(prev => ({...prev, characterClass: selectedClass}))
  }

  const changeName = (text: string): void => {
    setSheet(prev => ({...prev, name: text}))
  }

  const changeLevel = (text: string): void => {
    setSheet(prev => ({...prev, level: text}))
  }

  const validar = (sheet: CharacterSheet): Result => {
    const errors: Errors = {name: '', characterClass: '', level: '' }
    const level: number = Number(sheet.level)

    if (sheet.name.trim().length < 3) {
      errors.name = 'Mínimo 3 letras'
    }

    if (sheet.characterClass === null){
      errors.characterClass = 'Não pode ser null'
    }

    if (sheet.level.trim() === '' || !Number.isInteger(level) || level < 1|| level > 20) {
      errors.level = "Deve ser um inteiro entre 1 e 20"
    }

    const valid: boolean = (errors.name + errors.level + errors.characterClass) === ''
    return {
      errors,
      valid
    }
  }

  const submit = (): void => {
    const result: Result = validar(sheet)
    setErrors(result.errors)


    // Validação dos dados
    Alert.alert("Personagem criado", `${sheet.name.trim()} - ${sheet.characterClass} - ${sheet.level}`)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} 
          placeholder='Nome do personagem' 
          placeholderTextColor={'#9a9aa3'} 
          onChangeText={changeName}
          value={sheet.name}/>

        {errors.name !== '' && <Text style={styles.error}>{errors.name}</Text>}

        <Text style={styles.label}>Classe</Text>
        <View style={styles.options}>
        {
          CLASSES.map((characterClass: CharacterClass, index: number) => {
            return (
              <TouchableOpacity  
                style={[
                  styles.option,
                  sheet.characterClass === characterClass && styles.optionActive
                ]}
                key={index}
                onPress={() => changeClass(characterClass)}>
                <Text style={styles.optionText}>{characterClass}</Text>
              </TouchableOpacity>
            )
          })
        }
        </View>

        <Text style={styles.label}>Nível</Text>
        <TextInput style={styles.input} 
          placeholder='1 a 20' 
          placeholderTextColor={'#9a9aa3'} 
          keyboardType='numeric'
          onChangeText={changeLevel}
          value={sheet.level}
        />

        {errors.level !== '' && <Text style={styles.error}>{errors.level}</Text>}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={submit}>Criar personagem</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0E0E10' },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  title: { color: '#ED145B', fontSize: 24, fontWeight: 'bold', marginBottom: 28 },
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
