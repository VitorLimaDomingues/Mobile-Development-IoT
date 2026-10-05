import { type JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types';
import Placeholder from '../components/Placeholder';
import { CreateIcon, RivalsIcon } from '../components/TabIcons';
import CreateScreen from '../screens/CreateScreen';
import RivalsScreen from '../screens/RivalsScreen';

// PEÇA 2 · TABS: crie aqui o navigator das tabs
const Tab = createBottomTabNavigator<TabParamList>()
const AdventureTabs = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name='Create' 
      component={CreateScreen} 
      options={{title: 'inicio', tabBarIcon: CreateIcon}}/>
      <Tab.Screen name='Rivals' 
      component={RivalsScreen} 
      options={{title: 'Rivals', tabBarIcon: RivalsIcon}}/>
    </Tab.Navigator>
  );
};

export default AdventureTabs;
