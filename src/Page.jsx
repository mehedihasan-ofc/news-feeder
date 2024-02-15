import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { NewsContext } from "./context";
import NewsBoard from "./components/News/NewsBoard";

const Page = () => {

    const { loading } = useContext(NewsContext);

    return (
        <>
            {
                loading?.state ? (
                    <div>
                        <p>{loading?.message}</p>
                    </div>
                ) :
                    <>
                        <Header />
                        <main className="my-10 lg:my-14">
                            <NewsBoard />
                        </main>
                        <Footer />
                    </>
            }
        </>
    );
};

export default Page;