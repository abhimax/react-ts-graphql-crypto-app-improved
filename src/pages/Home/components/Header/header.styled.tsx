import styled from "styled-components";

const Header = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 80%;
    margin: 0px 10%;
    height: 15vh;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        justify-content: center;
    }
`;

export { Header };
