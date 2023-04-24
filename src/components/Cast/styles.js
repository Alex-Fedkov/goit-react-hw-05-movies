import styled from "styled-components";

export const Container = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-gap: 20px;
margin-top: 0;
margin-bottom: 0;
padding: 20px 0;
margin-left: auto;
margin-right: auto;
`;

export const Item = styled.li`
  list-style: none; 
  width: 200px;
  background-color: #d4d09e;
  border-radius: 10px;
  padding: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px; 
`;

export const Character = styled.p`
  font-weight: 600;
  font-size: 18px;
`;