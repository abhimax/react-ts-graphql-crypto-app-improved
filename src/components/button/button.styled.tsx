import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 38px;
    background-color: ${(props) => props.theme.color?.primary};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius?.button};
    color: ${(props) => props.theme.color?.white};
    font-family: ${(props) => props.theme.fontsFamily?.primary};
    font-size: ${(props) => props.theme.fontSize?.small};
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
`;
export { Button };