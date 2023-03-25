import { extendTheme } from "native-base"

export const theme = extendTheme({
  colors: {

  },
  fontConfig: {
    Inter: {
      300: { normal: "Inter_300Light", },
      400: { normal: "Inter_400Regular", },
      500: { normal: "Inter_500Medium", },
      700: { normal: "Inter_700Bold", },
    },
    Roboto: {
      300: { normal: "Roboto_300Light", },
      400: { normal: "Roboto_400Regular" },
      500: { normal: "Roboto_500Medium", },
      700: { normal: "Roboto_700Bold", },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Inter',
  },
  config: {
    initialColorMode: 'light',
  },
  components: {  }
})
