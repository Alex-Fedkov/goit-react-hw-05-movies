import styled from "styled-components";

export const Form = styled.form`
  margin: 20px auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  font-size: 22px;
  outline: none;
  padding-left: 15px;
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  border: 0;
  outline: none;

  &:hover,
  :focus {
    color: white;
    background-color: #59d879;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const Span = styled.span`
  font-size: 22px;
  color: grey;
`;
