import { type JSX } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import AdventureTabs from './AdventureTabs';
import RulesScreen from '../screens/RulesScreen';
import AboutScreen from '../screens/AboutScreen';
import LeaveButton from '../components/LeaveButton';

// DRAWER: o menu que desliza da borda ou abre pelo ícone do header
const Drawer = createDrawerNavigator<DrawerParamList>();

const HomeDrawer = (): JSX.Element => {
  // PARTE 3 · SAIR: o header do drawer ganha o LeaveButton no canto direito (headerRight em screenOptions)
  return (
    <Drawer.Navigator screenOptions={{ headerRight: () => <LeaveButton /> }}> 
      <Drawer.Screen name="Adventure" component={AdventureTabs} options={{ title: 'Aventura' }} />
      <Drawer.Screen name="Rules" component={RulesScreen} options={{ title: 'Regras' }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
