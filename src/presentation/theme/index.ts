import { extendTheme, theme as NBTheme } from "native-base"

export const theme = extendTheme({
  colors: {
    ...NBTheme,
    primary: NBTheme.colors.green,
    secondary: NBTheme.colors.blue,
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
  fontSizes: {
    "2xs": 10,
    "xs": 12,
    "sm": 14,
    "md": 16,
    "lg": 18,
    "xl": 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  },
  config: {
    initialColorMode: 'light',
  },
})
