import styled from "styled-components";

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    overflow: auto;
    margin-bottom: 20px;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        align-items: center;
    }
`;

const Item = styled.div`
    display: flex;
    height: 18%;
    width: 30%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px white solid;
    padding: 15px 10px;
    @media screen and (min-width: 0px) and (max-width: 600px) {
        width: 66%;
    }
`;

const ItemChildOne = styled.div`
    flex: 1;
`;

const ItemChildTwo = styled.div`
    flex: 2;
`;

const ItemChildThree = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const InnerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const First = styled.div`
    font-family: ${(props) => props.theme.fontsFamily?.primary};
    font-size: ${(props) => props.theme.fontSize?.small};
    color: ${(props) => props.theme.color?.textLight};
    line-height: 2rem;
`;
const Second = styled.div`
    font-family: ${(props) => props.theme.fontsFamily?.primary};
    font-size: ${(props) => props.theme.fontSize?.xsmall};
    color: ${(props) => props.theme.color?.textLight};
    line-height: 2rem;
    opacity: 0.5;
`;

export {
    ListItem,
    Item,
    ItemChildOne,
    ItemChildTwo,
    ItemChildThree,
    InnerList,
    First,
    Second,
};
