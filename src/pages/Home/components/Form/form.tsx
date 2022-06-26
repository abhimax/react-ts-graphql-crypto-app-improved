import { Div, Card, Upper, P, Error, Loader } from "./form.styled";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { useEffect, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
interface IState {
    name: string;
    cryptoName: string;
}

const CRYPTO_QUERY = gql`
    query price($name: String) {
        markets(filter:{ baseSymbol: {_eq:$name} quoteSymbol: {_eq:"EUR"}}) {
            marketSymbol
            ticker {
                lastPrice
            }
        }
    }
`;

const List = (props: any) => {
    const [state, setState] = useState<IState>({
        name: "",
        cryptoName: ""
    });

    let { name, cryptoName } = state;

    const [fetchData, { loading, error, data }] = useLazyQuery(CRYPTO_QUERY, {
        variables: { name }
    });

    useEffect(() => {
        if (data) {
            const localStorageData = localStorage.getItem("data");
            const obj: any = {};

            if (data?.markets?.length > 0 && data?.markets[0]?.ticker?.lastPrice) {
                obj.id = data.markets[0].marketSymbol;
                obj.name = name;
                obj.price = parseFloat(data?.markets[0]?.ticker?.lastPrice).toFixed(2) ?? "-"

                if (localStorageData) {
                    const crypto = JSON.parse(localStorageData);
                    crypto.push(obj);
                    props.setData(crypto);
                    localStorage.setItem("data", JSON.stringify(crypto));
                } else {
                    const crypto = [obj];
                    props.setData(crypto);
                    localStorage.setItem("data", JSON.stringify(crypto));
                }
            } else {
                setState({
                    ...state,
                    cryptoName: ""
                });
            }
            setState({
                ...state,
                name: ""
            });
        }
    }, [data])

    const addCrypto = (): void => {
        fetchData({ variables: { name } });
        setState({
            ...state,
            cryptoName: ""
        });
    };

    let updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, name: e.target.value });
    }

    if (loading) return <Loader>loading...</Loader>

    if (error) return <Error>Some error happen</Error>

    return (
        <Div>
            <Card>
                <Upper>
                    <Input
                        placeholder="Cryptocurrency Code"
                        onChange={updateInput}
                        value={name}
                    />
                    <Error>{cryptoName ? `${cryptoName} is not available.` : ''}</Error>
                    <Button onClick={addCrypto} disabled={!name} label={"Add"} />
                    <P>Use of this service is subject to terms and conditions.</P>
                </Upper>
            </Card>
        </Div>
    );
};

export default List;
