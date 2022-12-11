import styled from "styled-components";

export const Button = styled.button`

   width: 130px;
   height: 42px;
   border-radius: 19px;
   color: #fff;
   font-size: 14px;
   margin-left: 25px;
   cursor: pointer;
   box-shadow: 0px 0px 0px ;
   transition: all 0.25s ease-out;

  &:hover{
      margin-top: -4px;
      background-color: darkblue;
      box-shadow: 0px 4px 10px  #17a4d0;
   }
`;