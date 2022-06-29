import { Div, Card, Upper, P, Error, Loader } from "./form.styled";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { useEffect, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { CryptoItem } from "../../../../model/CriptoItem";
import { CryptoExists, CryptoNotFound } from "../../../../utils/message";

interface IState {
    name: string;
    cryptoName: string;
    dupCryptoName: string;
}

interface Props {
    setData: React.Dispatch<React.SetStateAction<CryptoItem[]>>;
}
const CRYPTO_QUERY = gql`
    query price($name: String) {
        markets(
            filter: { baseSymbol: { _eq: $name }, quoteSymbol: { _eq: "EUR" } }
        ) {
            marketSymbol
            ticker {
                lastPrice
            }
        }
    }
`;

const List = (props: Props) => {
    const [state, setState] = useState<IState>({
        name: "",
        cryptoName: "",
        dupCryptoName: "",
    });

    const [fetchData, { loading, error, data }] = useLazyQuery(CRYPTO_QUERY, {
        variables: { name: state.name },
    });

    useEffect(() => {
        if (data) {
            const localStorageData = localStorage.getItem("data");
            const obj: CryptoItem = { id: "", name: "", price: "" };

            if (data?.markets?.[0]?.ticker?.lastPrice) {
                obj.id = data.markets[0].marketSymbol;
                obj.name = state.name;
                obj.price =
                    parseFloat(data?.markets[0]?.ticker?.lastPrice).toFixed(
                        2
                    ) ?? "-";
                if (localStorageData) {
                    const crypto = JSON.parse(localStorageData);
                    if (crypto.some((obj: CryptoItem) => obj.name === state.name)) {
                        setState((curr) => ({
                            ...state,
                            dupCryptoName: curr.name,
                        }));
                    } else {
                        crypto.push(obj);
                        props.setData(crypto);
                        localStorage.setItem("data", JSON.stringify(crypto));
                    }
                } else {
                    const crypto = [obj];
                    props.setData(crypto);
                    localStorage.setItem("data", JSON.stringify(crypto));
                }
            } else {
                setState((curr) => ({
                    ...curr,
                    cryptoName: curr.name,
                }));
            }
            setState((curr) => ({
                ...curr,
                name: "",
            }));
        }
    }, [data]);

    const addCrypto = (): void => {
        fetchData({ variables: { name: state.name } });
        setState((curr) => ({
            ...curr,
            cryptoName: "",
            dupCryptoName: "",
        }));
    };

    let updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({ ...state, name: e.target.value.toLocaleUpperCase() });
    };

    if (loading) return <Loader>loading...</Loader>;

    if (error) return <Error>Some error happen</Error>;

    return (
        <Div>
            <Card>
                <Upper>
                    <Input
                        placeholder="Cryptocurrency Code"
                        onChange={updateInput}
                        value={state.name}
                    />
                    <Error>
                        {CryptoNotFound(state.cryptoName)}
                        {CryptoExists(state.dupCryptoName)}
                    </Error>
                    <Button
                        onClick={addCrypto}
                        disabled={!state.name}
                        label={"Add"}
                    />
                    <P>
                        Use of this service is subject to terms and conditions.
                    </P>
                </Upper>
            </Card>
        </Div>
    );
};

export default List;
