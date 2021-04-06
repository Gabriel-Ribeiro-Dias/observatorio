import {createGlobalStyle} from 'styled-components';
import madetommy_medium from '../../assets/fonts/made_tommy/made-tommy_Medium.otf';
import madetommy_bold from '../../assets/fonts/made_tommy/made-tommy_Bold.otf';
import madetommy_regular from '../../assets/fonts/made_tommy/made-tommy_Regular.otf';

export default createGlobalStyle`
  @font-face{
    font-family: 'MADE TOMMY BOLD';
    src: local('MADE TOMMY BOLD'),
        url(${madetommy_bold}) format('otf'),
  }

`