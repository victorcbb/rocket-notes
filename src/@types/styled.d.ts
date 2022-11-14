import "styled-components"

import { defaultTheme } from "../styles/themes"

type ThemeType = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    COLORS: {
      BACKGROUND_900: string
      BACKGROUND_800: string
      BACKGROUND_700: string

      WHITE: string
      ORANGE: string

      GRAY_100: string
      GRAY_300: string

      RED: string
    }
  }
}