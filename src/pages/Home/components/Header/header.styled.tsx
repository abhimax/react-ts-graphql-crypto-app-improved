import styled from "styled-components";

const Header = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 15vh;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        justify-content: center;
    }
`;

export { Header };
