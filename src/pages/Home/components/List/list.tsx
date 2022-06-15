import { ListItem, Item, ItemChileOne, ItemChileTwo, ItemChileThree, InnerList, First, Second } from "./list.styled";

const List = (props: any) => {
    const handleDelete = (id: number) => {
        let afterDelete = props.data.filter((item: any) => item.id !== id);
        props.setData(afterDelete);
        localStorage.setItem("data", JSON.stringify(afterDelete));
    };
    return (
        <ListItem>
            {props.data.map((item: any, idx: any) => {
                return (
                    <Item key={idx}>
                        <ItemChileOne>
                            <img src="./assets/icon.svg" alt="trophy" height="60px" />
                        </ItemChileOne>
                        <ItemChileTwo>
                            <InnerList>
                                <First>{item.name}</First>
                                <Second>{item.price !== "-" ? `${item.price} €` : "-"} </Second>
                            </InnerList>
                        </ItemChileTwo>

                        <ItemChileThree>
                            <img
                                src="./assets/close.png"
                                alt="close"
                                height="10px"
                                width="10px"
                                onClick={() => handleDelete(item.id)}
                            />
                        </ItemChileThree>
                    </Item>
                );
            })}
        </ListItem>
    );
};

export default List;
