import { NativeBaseProvider } from "native-base";

import { Home } from "./pages/Home";
import { theme } from "./theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  );
}
