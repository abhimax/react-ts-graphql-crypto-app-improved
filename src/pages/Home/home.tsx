import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import "../../components/global.css";
import { TopWrapper, MainTitle, SubTitle, TitleWrapper } from "./home.styled";
import { Footer } from "./components/Footer";
import { CList } from "../../interface";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
    const [data, setData] = useLocalStorage<CList[]>("data");

    const handleDelete = (id: number | string) => {
        let afterDelete = data.filter((item: CList) => item.id !== id);
        setData(afterDelete);
    };
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

                <List
                    data={data}
                    setData={setData}
                    handleDelete={handleDelete}
                />
            </div>
            <Footer />
        </>
    );
};

export default Home;
