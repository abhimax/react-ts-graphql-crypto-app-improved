import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 15vh;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        justify-content: center;
    }
    background-color: ${(props) => props.theme.color?.white};
    padding: 0px 10%;
    box-sizing: border-box;
`;

const P = styled.p`
    color: ${(props) => props.theme.color?.black};
    opacity: 0.5;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize?.xxSmall};
`;

export { Footer, P };
