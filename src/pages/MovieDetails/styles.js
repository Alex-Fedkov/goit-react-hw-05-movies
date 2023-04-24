import styled from "styled-components";

export const Box = styled.main`
    padding: 10px 40px;
`;

export const Button = styled.button`  
    margin-bottom: 10px;    
    padding: 5px;
    font-size: 22px;
    font-weight: 600;

    &:hover,
    :focus {
    background-color: #59d879;
    cursor: pointer;
    border-radius: 5px;
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

export const Text = styled(Subtitle)`
    font-weight: 400;
`;

export const TextGen = styled.div`
    font-size: 20px;
    font-weight: 400;
`;

export const Card = styled.div`
    display: flex;
    gap: 15px;
    `;

export const DivList = styled.ul`
    list-style: none;
    font-size: 20px;
`;
