import { CList } from "../../../../interface";
import { ListItem } from "./list.styled";
import { Item } from "../../../../components/item";
interface Props {
    data: CList[];
    setData: React.Dispatch<React.SetStateAction<CList[]>>;
}
const List = (props: Props) => {
    const handleDelete = (id: number | string) => {
        let afterDelete = props.data.filter((item: CList) => item.id !== id);
        props.setData(afterDelete);
        localStorage.setItem("data", JSON.stringify(afterDelete));
    };
    return (
        <ListItem>
            {props.data.map((item: CList) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                );
            })}
        </ListItem>
    );
};

export default List;
