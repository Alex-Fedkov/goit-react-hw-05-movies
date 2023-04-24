import styled from "styled-components";

export const Title = styled.h1`
    width: 300px;
    margin: 20px auto;
`;

export const List = styled.ul`  
    display: grid;
    max-width: calc(100vw - 96px);
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    padding-top: 20px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const Box = styled.main`
    padding: 10px 40px;
`;
