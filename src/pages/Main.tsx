import Frontend from '../templates/Frontend';
import * as S from './index'
import phone_Background from '../assets/xsGxhtAsfSA.jpg'
import PlayButton from '../atoms/playbutton'
import AButton from '../atoms/AButton'

function Main() {
  return (
   
      <Frontend>
          
      <S.Container>
       <div>
        <h1>Connecting all your banking needs</h1>  
        <h6>A smart mobile application you can control your business needs</h6>
        <PlayButton /> 
        <AButton />
       </div>    
  
       <div>
       <img src={phone_Background} /> 
       </div>
      </S.Container>

        </Frontend>
  
  )
}

export default Main
