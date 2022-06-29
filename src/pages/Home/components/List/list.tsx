import { CList } from "../../../../interface";
import { ListItem } from "./list.styled";
import { Item } from "../../../../components/item";
interface Props {
    data: CList[];
    setData: React.Dispatch<React.SetStateAction<CList[]>>;
    handleDelete: (id: string) => void;
}
const List = (props: Props) => {
    return (
        <ListItem>
            {props.data.map((item: CList) => {
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
