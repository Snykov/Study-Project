import * as S from './style';
import Header from '../../organisms/Header';

type FrontendProps = {
    children: React.ReactNode;
}

const Frontend = ({ children }: FrontendProps) => {
  return(
    <S.Container>
    <Header/>   

    <main>
      {children}
    </main>
 </S.Container>

  )
}

export default Frontend;