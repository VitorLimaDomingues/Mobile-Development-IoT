import { type JSX } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import Placeholder from '../components/Placeholder';
import AdventureTabs from './AdventureTabs';
import RulesScreen from '../screens/RulesScreen';

// PEÇA 3 · DRAWER: crie aqui o navigator do drawer
const Drawer = createDrawerNavigator<DrawerParamList>()
const HomeDrawer = (): JSX.Element => {
  return (
    // PEÇA 3 · DRAWER: troque o Placeholder pelo Drawer.Navigator, com uma Drawer.Screen por item
    <Drawer.Navigator>
      <Drawer.Screen name='Adventure' 
      component={AdventureTabs} 
      options ={{title: 'Aventura'}}/>
      
      <Drawer.Screen name='Rules' 
      component={RulesScreen}
      options ={{title: 'Regras'}}/>
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
