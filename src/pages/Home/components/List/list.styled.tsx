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
`;

const Item = styled.div`
    display: flex;
    height: 18%;
    width: 50%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px white solid;
    padding: 15px 10px;
`;

const ItemChileOne = styled.div`
    flex: 1;
`;

const ItemChileTwo = styled.div`
    flex: 2;
`;

const ItemChileThree = styled.div`
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
    color: #fcfbfc;
    margin-bottom: 1px;
    font-size: 20px;
    text-transform: uppercase;
`;
const Second = styled.div`
    color: #fcfbfc;
    opacity: 0.5;
    font-size: 12px;
`;

export { ListItem, Item, ItemChileOne, ItemChileTwo, ItemChileThree, InnerList, First, Second };
