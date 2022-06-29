import { CryptoItem } from "../../../../model/CriptoItem";
import { ListItem } from "./list.styled";
import { Item } from "../../../../components/item";
interface Props {
    data: CryptoItem[];
    setData: React.Dispatch<React.SetStateAction<CryptoItem[]>>;
    handleDelete: (id: string) => void;
}
const List = (props: Props) => {
    return (
        <ListItem>
            {props.data.map((item: CryptoItem) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        item={item}
                        handleDelete={props.handleDelete}
                    />
                );
            })}
        </ListItem>
    );
};

export default List;
