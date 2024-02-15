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
                    <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
                        <p className="text-center text-3xl text-black">
                            {loading.message}
                        </p>
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