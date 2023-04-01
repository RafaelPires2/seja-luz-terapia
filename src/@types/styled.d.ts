import 'styled-components';
import { MyTheme } from '../styles/default';

declare module 'styled-components' {
  type ThemeType = typeof MyTheme;
  export interface DefaultTheme extends ThemeType {}
}
