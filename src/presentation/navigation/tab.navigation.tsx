import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { FixedExpenses } from '../screens/FixedExpenses';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { VariableExpenses } from '../screens/VariableExpenses';
import { IconButton, useTheme } from 'native-base';
import { CreateExpense } from '../screens/CreateExpense';

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
  Create: ItemMenu;
  FixedExpenses: ItemMenu;
  Home: ItemMenu;
  Settings: ItemMenu;
  VariableExpenses: ItemMenu;
}

export function AppRoutes() {
  const theme = useTheme();

  const colors = {
    color: theme.colors.gray[300],
    colorSelected: theme.colors.primary[500],
  } as ColorType;

  const itemsMenu = {
    FixedExpenses: {
      icon: 'list',
      ...colors,
    },
    Home: {
      icon: 'home',
      ...colors,
    },
    Create: {
      icon: 'plus',
      color: theme.colors.green[600],
    },
    Settings: {
      icon: 'settings',
      ...colors,
    },
    VariableExpenses: {
      icon: 'briefcase',
      ...colors,
    },
  } as ItemsMenu;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          return itemsMenu[route.name].icon !== 'plus' ? (
            <Feather
              name={itemsMenu[route.name].icon}
              size={size}
              color={
                focused ?
                  itemsMenu[route.name].colorSelected
                : itemsMenu[route.name].color}
            />
          ) : (
            <IconButton
              bg={theme.colors.green[500]}
              size="md"
              borderRadius="lg"
            >
              <Feather
                name={itemsMenu[route.name].icon}
                size={20}
                color={theme.colors.white}
              />
            </IconButton>
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
        name="Create"
        component={CreateExpense}
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
