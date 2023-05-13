import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='' screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}
