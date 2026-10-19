import { type JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types';
import { CreateIcon, RivalsIcon } from '../components/TabIcons';
import CreateScreen from '../screens/CreateScreen';
import RivalsScreen from '../screens/RivalsScreen';

// TABS: barra fixa embaixo, uma seção por tab
const Tab = createBottomTabNavigator<TabParamList>();

const AdventureTabs = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Create" component={CreateScreen} options={{ title: 'Criar', tabBarIcon: CreateIcon }} />
      <Tab.Screen name="Rivals" component={RivalsScreen} options={{ title: 'Rivais', tabBarIcon: RivalsIcon }} />
    </Tab.Navigator>
  );
};

export default AdventureTabs;
