import { CryptoItem } from "../../model/CriptoItem";
import {
    First,
    InnerList,
    Item,
    ItemChildOne,
    ItemChildThree,
    ItemChildTwo,
    Second,
} from "./item.styled";

interface Props {
    id: string;
    item: CryptoItem;
    handleDelete: (id: string) => void;
}

const ItemComponent = ({ item, handleDelete }: Props) => {
    return (
        <Item key={item.id}>
            <ItemChildOne>
                <img src="./assets/icon.svg" alt="trophy" height="60px" />
            </ItemChildOne>
            <ItemChildTwo>
                <InnerList>
                    <First>{item.name}</First>
                    <Second>
                        {item.price !== "-" ? `${item.price} €` : "-"}{" "}
                    </Second>
                </InnerList>
            </ItemChildTwo>

            <ItemChildThree>
                <img
                    src="./assets/close.png"
                    alt="close"
                    height="10px"
                    width="10px"
                    onClick={() => handleDelete(item.id)}
                />
            </ItemChildThree>
        </Item>
    );
};

export default ItemComponent;
