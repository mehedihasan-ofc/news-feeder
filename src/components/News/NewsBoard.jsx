import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsNotFound from "./NewsNotFound";

const NewsBoard = () => {

    const { newsData } = useContext(NewsContext);

    console.log("newsDaa", newsData);

    const leftNews = newsData.filter((_, index) => index % 2 !== 0);
    const rightNews = newsData.filter((_, index) => index % 2 === 0);

    const formatPublishedAt = (publishedAt) => {
        const currentDate = new Date();
        const newsDate = new Date(publishedAt);
        const timeDiff = currentDate - newsDate;
        const secondsDiff = Math.floor(timeDiff / 1000);
        const minutesDiff = Math.floor(secondsDiff / 60);
        const hoursDiff = Math.floor(minutesDiff / 60);
        const daysDiff = Math.floor(hoursDiff / 24);

        if (daysDiff === 0) {
            if (hoursDiff === 0) {
                return minutesDiff === 1 ? `${minutesDiff} minute ago` : `${minutesDiff} minutes ago`;
            } else {
                return hoursDiff === 1 ? `${hoursDiff} hour ago` : `${hoursDiff} hours ago`;
            }
        } else if (daysDiff === 1) {
            return 'Yesterday';
        } else {
            return newsDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
        }
    };

    return (
        <>
            {
                newsData.length > 0 ? <>
                    <div className="container mx-auto grid grid-cols-12 gap-8">

                        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">

                            {
                                leftNews?.map(news => (
                                    <div key={news?.title} className="col-span-12 grid grid-cols-12 gap-4">

                                        <div className="col-span-12 lg:col-span-4">
                                            <a href="#"
                                            ><h3
                                                className="mb-2.5 text-2xl font-bold lg:text-[28px]"
                                            >
                                                    {news?.title}
                                                </h3></a
                                            >
                                            {news?.content ? <p className="text-base text-[#5C5955]">
                                                {news?.content}
                                            </p> : news?.description ? <p className="text-base text-[#5C5955]">
                                                {news?.description}
                                            </p> : ""}
                                            <p className="mt-5 text-base text-[#5C5955]">
                                                {formatPublishedAt(news?.publishedAt)}
                                            </p>
                                        </div>

                                        <div className="col-span-12 lg:col-span-8">
                                            {news?.urlToImage && <img
                                                className="w-full"
                                                src={news?.urlToImage}
                                                alt="thumb"
                                            />}
                                            {news?.author && <p className="mt-5 text-base text-[#5C5955]">
                                                Author: {news?.author}
                                            </p>}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="col-span-12 self-start xl:col-span-4">
                            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">

                                {rightNews?.map(news => (
                                    <div key={news?.title} className="col-span-12 mb-6 md:col-span-8">

                                        {news?.urlToImage && <img
                                            className="w-full"
                                            src={news?.urlToImage}
                                            alt="thumb"
                                        />}

                                        <div className="col-span-12 mt-6 md:col-span-4">
                                            <a href="#"
                                            ><h3
                                                className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                            >
                                                    {news?.title}
                                                </h3></a
                                            >

                                            {news?.description && <p className="text-base text-[#292219]">
                                                {news?.description}
                                            </p>}

                                            <p className="mt-5 text-base text-[#94908C]">
                                                {formatPublishedAt(news?.publishedAt)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </> : <NewsNotFound />
            }
        </>
    );
};

export default NewsBoard;