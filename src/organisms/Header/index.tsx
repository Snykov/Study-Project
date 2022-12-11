import * as S from './style';

import Logo from '../../molecules/Logo'
import Menu from '../../molecules/menu'
import Button from '../../atoms/Button'


const Header = () => {
  return ( 
  <S.Box>
    <Logo />
    <Menu />
   <Button />
  </S.Box>
  );
};



export default Header;