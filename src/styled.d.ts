// styled.d.ts
import 'styled-components';
import { Colors } from './infrastructure/theme/types/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    space;
    lineHeights;
    sizes;
    fonts;
    fontSizes;
    fontWeights;
  }
}
