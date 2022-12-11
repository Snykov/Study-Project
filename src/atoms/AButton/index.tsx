import * as S from './style';
import apple from '../../assets/apple.svg'
import PlayDown from '../../assets/play-store-1957164-1650966.png'

const AButton = () => {
  return ( 
    <S.AButton>
       <h1>
      <img src={PlayDown} /> Download App
      </h1>
    </S.AButton>
  )
}


export default AButton;
