import styled from "styled-components";
const Div = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: cenetr;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        justify-content: center;
        margin-top: 2rem;
    }
`;
const Card = styled.div`
    background-color: white;
    height: fit-content;
    padding: 3rem 1rem;
    display: -ms-flexbox;
    justify-content: center;
    align-items: center;
`;
const Upper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    margin: auto;
`;

const P = styled.p`
    color: black;
    opacity: 0.5;
    margin-top: 2.5rem;
    text-align: center;
    font-size: 14px;
`;

const Error = styled.p`
    color: red;
    font-size: 12px;
`;

const Loader = styled.p`
    color: ${(props) => props.theme.color?.white};
    font-size: ${(props) => props.theme.fontSize?.small};
`;

export { Div, Card, Upper, P, Error, Loader };
