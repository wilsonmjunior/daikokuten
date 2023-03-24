import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"

import { AppRoutes } from "./navigation/tab.navigation"
import { theme } from "./theme"

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
