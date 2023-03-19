import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"

import { AppRoutes } from "./routes/app.routes"
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
