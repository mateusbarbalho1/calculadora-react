import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}
`;

export const Main = styled.main`
  background: linear-gradient(#7482ff, #525bff, #a680ff);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const H1 = styled.h1`
  color: #ffffff;
`;
export const Input = styled.input`
  width: 30vw;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin: 8px;

  &::placeholder {
    color: #00000066;
    text-align: center;
  }
`;

export const Btn = styled.button`
  border: none;
  padding: 10px 15px;
  color: #000000;
  border-radius: 5px;
  margin: 5px;
  background-color: white;

  &:hover {
    background-color: #e8e8e8;
    color: #6f5269;
    border: #6f5269 solid 1px;
  }
`;

export const Resultado = styled.h2`
  border-radius: 50%;
  background-color: none;
  padding: 10px;
  color: #ffffff;
  margin: 10px;
`;
