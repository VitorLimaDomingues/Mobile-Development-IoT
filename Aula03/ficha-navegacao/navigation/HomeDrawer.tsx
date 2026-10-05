import { type JSX } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import Placeholder from '../components/Placeholder';
import AdventureTabs from './AdventureTabs';
import RulesScreen from '../screens/RulesScreen';

// PEÇA 3 · DRAWER: crie aqui o navigator do drawer

const HomeDrawer = (): JSX.Element => {
  return (
    // PEÇA 3 · DRAWER: troque o Placeholder pelo Drawer.Navigator, com uma Drawer.Screen por item
    <Placeholder text="Peça 3: monte o drawer em navigation/HomeDrawer.tsx" />
  );
};

export default HomeDrawer;
