import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import "../../components/global.css";
import { ListStyled, MainTitle, SubTitle } from "./home.styled";

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
                <ListStyled>
                    <div>
                        <MainTitle>
                            Now you can track <br />
                            all your cryptos here!
                        </MainTitle>
                    </div>
                    <div>
                        <SubTitle>
                            Just enter the <br />
                            cryptocurrency on the <br />
                            form to the right.
                        </SubTitle>
                    </div>
                    <List data={data} setData={setData} />
                </ListStyled>
                {/* Form */}
                <Form setData={setData} />
            </div>
        </>
    );
};

export default Home;
