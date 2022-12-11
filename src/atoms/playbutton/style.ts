import styled from "styled-components";

export const PlayButton =  styled.button`
  
  padding: 1px 44px 1px;
  border-radius: 20px;
  margin: 8px;
  background: none;
  border: 0.1rem  solid #000;
  

  img{
    max-height: 33px; 
    top: 9px;
    position: relative;
  }

  h1{
    font-weight: 722;
    font-size: 16px;
  }

  &:Hover{
    position: relative;
    cursor: pointer;  
    box-shadow: 2px 2px 42px #000;
   top: -7px;
  }
`

