import styled from "styled-components";
const Div = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: cenetr;
    width: 100%;
    height: 100%;
`;
const Card = styled.div`
    background-color: white;
    height: 32%;
    width: 50%;
    padding: 0px 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Upper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 70%;
    width: 75%;
    margin: auto;
`;

const P = styled.p`
    color: black;
    opacity: 0.5;
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
`;

export { Div, Card, Upper, P };
