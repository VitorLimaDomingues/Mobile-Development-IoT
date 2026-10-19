# Ficha de Personagem · boilerplate da Aula 8

O app da Aula 7 com os dez exercícios resolvidos. Hoje ele ganha uma lista que rola (`FlatList`), um login que lembra o nome (`AsyncStorage` + `useEffect`) e um botão SAIR no header. O que não é assunto da aula já está pronto; procure por `PARTE` no projeto.

## 1. Instalar

Dentro desta pasta, uma linha de cada vez:

```bash
npm install
npx expo start
```

Com o Metro no ar, aperte `a` para abrir no emulador Android. Cada pacote novo entra na hora em que a aula precisa dele, sempre com `npx expo install` (nunca `npm install`): ele escolhe a versão que o Expo Go conhece.

| Quando | Comando |
|--------|---------|
| começo da Parte 2 | `npx expo install @react-native-async-storage/async-storage` e depois `npx expo start --clear` |
| bloco da foto | `npx expo install expo-image-picker` e depois `npx expo start --clear` |

O app abre no login, igual ao da aula passada. A tab Rivais mostra só 8 dos 480 rivais e não rola, com um contador dizendo "cartões montados: 480 de 480": é a Parte 1.

## 2. O que escrever, na ordem

| Parte | Arquivo | O que escrever |
|------|---------|----------------|
| 1a · rolar | `screens/RivalsScreen.tsx` | o `map` embrulhado num `ScrollView`: rola, mas o contador continua em 480 |
| 1b · lista | `screens/RivalsScreen.tsx` | a função `renderRival`, tipada com `ListRenderItemInfo<CharacterSheet>`, e a `FlatList` (`data`, `keyExtractor`, `renderItem`) no lugar do `ScrollView` + `map`: o contador cai |
| 2a · guardar e ler | `storage.ts` | o import do `AsyncStorage` e o corpo de `savePlayer` (`setItem`) e de `loadPlayer` (`getItem`) |
| 2b · guardar no ENTRAR | `screens/LoginScreen.tsx` | `enter` vira `async`; `await savePlayer(player.trim())` antes do `replace` |
| 2c · ler ao abrir | `screens/LoginScreen.tsx` | o `useEffect` com `[]`, com uma função `async` dentro que chama `loadPlayer` e preenche o campo |
| 3 · sair | `storage.ts`, `components/LeaveButton.tsx`, `navigation/HomeDrawer.tsx` | o corpo de `clearPlayer` (`removeItem`); `await clearPlayer()` antes do `replace`; `screenOptions={{ headerRight: () => <LeaveButton /> }}` no drawer |
| extra · foto | `screens/CharacterScreen.tsx` | depois de `npx expo install expo-image-picker`: o import e o corpo de `pickPhoto` |

## 3. O que já vem pronto

| Arquivo | Conteúdo |
|---------|----------|
| `App.tsx`, `navigation/` | o stack, o drawer e as tabs da Aula 7, com os exercícios resolvidos |
| `screens/` | as seis telas. A `CharacterScreen` já tem o estado `photo`, o `<Image>` e o botão FOTO DA GALERIA |
| `components/LeaveButton.tsx` | o botão SAIR, com a linha do exercício 10 dentro. Falta só apagar o nome |
| `storage.ts` | as três funções do `AsyncStorage`, com assinatura e chave prontas, corpo vazio e sem o import (ele entra na Parte 2, depois de instalar) |
| `components/RivalRow.tsx` | o cartão de um rival, que soma 1 ao montar e subtrai 1 ao desmontar, e o hook `useMountedRows` que a tela usa para mostrar o total |
| `data/rivals.ts` | 480 rivais gerados (24 nomes × 20 epítetos) e o sorteio |
| `types.ts`, `theme.ts`, `validateSheet.ts`, `validatePlayer.ts`, `components/TabIcons.tsx` | iguais à Aula 7 |

## 4. Conferir

```bash
npx tsc --noEmit
```
