# Ficha de Personagem com navegação · boilerplate da Aula 7

As telas chegam **prontas**. O que a gente monta em aula é a navegação: três navigators (stack, tabs e drawer) e seis triggers, uma linha cada.

## 1. Instalar

Dentro desta pasta, uma linha de cada vez:

```bash
npm install
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
npx expo install @react-navigation/bottom-tabs
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-worklets
npx expo start
```

Sempre `npx expo install`, nunca `npm install`, para pacote novo: ele escolhe a versão que o Expo Go conhece. Com o Metro no ar, aperte `a` para abrir no emulador Android.

O app abre com um aviso: "Peça 1: monte o stack no App.tsx". É o esperado: a navegação ainda não foi montada.

## 2. O que montar, na ordem

Procure por `PEÇA` no projeto: cada lugar tem um comentário. Os imports já estão prontos.

| Peça | Arquivo | O que escrever |
|------|---------|----------------|
| 1 · stack | `App.tsx` | o `Stack.Navigator` com as telas Login e Home, no lugar do `Placeholder` |
| 2 · tabs | `navigation/AdventureTabs.tsx` | o `Tab.Navigator` com as tabs Create e Rivals. Depois, a rota Home passa a apontar para ele |
| 3 · drawer | `navigation/HomeDrawer.tsx` | o `Drawer.Navigator` com os itens Adventure e Rules. Depois, a rota Home passa a apontar para ele |
| 4 · Character | `App.tsx` | mais uma `Stack.Screen`, para a tela Personagem |

## 3. Os seis triggers

Procure por `TRIGGER` no projeto. Cada um tem um comentário dizendo o que precisa acontecer ali.

| Trigger | Arquivo | Função | O que precisa acontecer |
|---------|---------|--------|-------------------------|
| 1 | `screens/LoginScreen.tsx` | `enter` | entrar no app; depois disso o voltar não pode retornar ao login |
| 2 | `screens/RivalsScreen.tsx` | `open` | abrir a tela Personagem com o rival tocado |
| 3 | `screens/CreateScreen.tsx` | `showCharacter` | abrir a tela Personagem com a ficha criada |
| 4 | `screens/CharacterScreen.tsx` | `rival` | abrir mais uma tela Personagem por cima, com o rival sorteado |
| 5 | `screens/CharacterScreen.tsx` | `back` | voltar uma tela |
| 6 | `screens/CharacterScreen.tsx` | `home` | voltar para a primeira tela do stack |

## 4. O mapa final

```
stack (raiz)                 App.tsx
├── Login                    sai do stack depois de entrar
├── Home                     drawer · navigation/HomeDrawer.tsx
│   ├── Adventure            tabs · navigation/AdventureTabs.tsx
│   │   ├── Create           o formulário
│   │   └── Rivals           a lista de rivais
│   └── Rules                as regras
└── Character                o personagem, abre por cima de tudo
```

## 5. O que já vem pronto

| Arquivo | Conteúdo |
|---------|----------|
| `screens/LoginScreen.tsx` | o login, com o nome de quem joga |
| `screens/CreateScreen.tsx` | o formulário da Aula 6, com o Alert de dois botões |
| `screens/RivalsScreen.tsx` | a lista de rivais |
| `screens/RulesScreen.tsx` | as regras |
| `screens/CharacterScreen.tsx` | um personagem, recebido por parâmetro |
| `types.ts` | os tipos da ficha e as rotas de cada navigator |
| `theme.ts` | o tema escuro da navegação, com as cores do app |
| `components/TabIcons.tsx` | os ícones das tabs |
| `components/Placeholder.tsx` | o aviso que ocupa o lugar de uma peça ainda não montada |
| `validateSheet.ts`, `validatePlayer.ts` | as validações, como funções puras |
| `data/rivals.ts` | os rivais prontos e o sorteio |

## 6. Conferir

```bash
npx tsc --noEmit
```
