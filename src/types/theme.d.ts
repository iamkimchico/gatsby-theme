// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    base:{
      [key:string]:any;
    },
    design:{
      [key:string]:any;
    }
  }
}