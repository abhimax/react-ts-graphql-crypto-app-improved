import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import "../../components/global.css";
import { TopWrapper, MainTitle, SubTitle, TitleWrapper } from "./home.styled";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let storageData = localStorage.getItem("data");
        if (storageData) {
            try {
                setData(JSON.parse(storageData));
            } catch (error) {
                setData([]);
            }
        }
    }, []);

    return (
        <>
            <Header />
            <div className="main">
                <TopWrapper>
                    <TitleWrapper>
                    <MainTitle>
                        Now you can track <br />
                        all your cryptos here!
                    </MainTitle>
                    <SubTitle>
                        Just enter the <br />
                        cryptocurrency on the <br />
                        form to the right.
                    </SubTitle>
                    </TitleWrapper>
                    <Form setData={setData} />
                </TopWrapper>

                <List data={data} setData={setData} />
            </div>
        </>
    );
};

export default Home;
