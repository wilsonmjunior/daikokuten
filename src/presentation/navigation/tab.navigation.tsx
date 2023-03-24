import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { FixedExpenses } from '../screens/FixedExpenses';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { VariableExpenses } from '../screens/VariableExpenses';
import { useTheme } from 'native-base';

const Tab = createBottomTabNavigator();

type IconType = keyof typeof Feather.glyphMap;

type ItemMenu = {
  icon: IconType;
  iconSelected?: IconType;
  color: string;
  colorSelected?: string;
}

type ColorType = Pick<ItemMenu, 'color' | 'colorSelected'>

type ItemsMenu = {
  Home: ItemMenu;
  Settings: ItemMenu;
  FixedExpenses: ItemMenu;
  VariableExpenses: ItemMenu;
}

export function AppRoutes() {
  const theme = useTheme();

  const colors = {
    color: theme.colors.gray[300],
    colorSelected: theme.colors.primary[500],
  } as ColorType;

  const itemsMenu = {
    Home: {
      icon: 'home',
      ...colors,
    },
    Settings: {
      icon: 'settings',
      ...colors,
    },
    FixedExpenses: {
      icon: 'lock',
      ...colors,
    },
    VariableExpenses: {
      icon: 'aperture',
      ...colors,
    },
  } as ItemsMenu;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          return (
            <Feather
              name={itemsMenu[route.name].icon}
              size={size}
              color={
                focused ?
                  itemsMenu[route.name].colorSelected
                : itemsMenu[route.name].color}
            />
          );
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="VariableExpenses"
        component={VariableExpenses}
      />
      <Tab.Screen
        name="FixedExpenses"
        component={FixedExpenses}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
