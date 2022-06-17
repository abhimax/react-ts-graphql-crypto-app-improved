import styled from "styled-components";

const TopWrapper = styled.div`
    display: flex;
    width: 100%;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;
const MainTitle = styled.div`
    font-family: ${(props) => props.theme.fontsFamily?.primary};
    font-size: ${(props) => props.theme.fontSize?.xLarge};
    color: ${(props) => props.theme.color?.textLight};
    line-height: 3rem;
    @media screen and (min-width: 0px) and (max-width: 1024px) {
            font-size: ${(props) => props.theme.fontSize?.large};
      }
`;
const SubTitle = styled.div`
    font-family: ${(props) => props.theme.fontsFamily?.primary};
    font-size: ${(props) => props.theme.fontSize?.medium};
    color: ${(props) => props.theme.color?.textLight};
    line-height: 1.8rem;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 1rem;
`;

const TitleWrapper = styled.div`
    display: flex;
    height: fit-content;
    flex-direction: column;
`;
export { TopWrapper, MainTitle, SubTitle, TitleWrapper };
