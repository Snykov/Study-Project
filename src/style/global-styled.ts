import { createGlobalStyle } from 'styled-components';

export const globalStyle = createGlobalStyle`
 *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }
 
 html,body, #root{
  height: 10%;
  background-color: #f9f7ff;
  color: black;
  font-family: 'Poppins', sans-serif;
 }

  button{
     background-color: blue;
     border: none;
     outline: none;
     font-family: 'Poppins', sans-serif;

  }

  a{
  text-decoration: none;
  align-content: none;
  outline: none; 
  }
  
`;


export default globalStyle;