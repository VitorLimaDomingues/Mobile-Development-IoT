import { type JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types';
import Placeholder from '../components/Placeholder';
import { CreateIcon, RivalsIcon } from '../components/TabIcons';
import CreateScreen from '../screens/CreateScreen';
import RivalsScreen from '../screens/RivalsScreen';

// PEÇA 2 · TABS: crie aqui o navigator das tabs

const AdventureTabs = (): JSX.Element => {
  return (
    // PEÇA 2 · TABS: troque o Placeholder pelo Tab.Navigator, com uma Tab.Screen por tab
    <Placeholder text="Peça 2: monte as tabs em navigation/AdventureTabs.tsx" />
  );
};

export default AdventureTabs;
