import { useContext } from "react";
import { NewsContext } from "../../context";

const NewsBoard = () => {

    const { newsData } = useContext(NewsContext);

    const leftData = newsData?.filter(news => news?.urlToImage !== null && news?.description !== null);
    const rightData = newsData?.filter(news => news?.urlToImage === null);

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
        <div>
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <div
                    className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8"
                >

                    {
                        leftData?.map((news, _idx) => (
                            <div key={_idx} className="col-span-12 grid grid-cols-12 gap-4 shadow p-5 border">
                                <div className="col-span-12 lg:col-span-4">
                                    <a href="#"
                                    ><h3
                                        className="mb-2.5 text-2xl font-bold lg:text-[28px]"
                                    >
                                            {news?.title}
                                        </h3></a
                                    >
                                    <p className="text-base text-[#5C5955]">
                                        {news?.description}
                                    </p>
                                    <p className="mt-5 text-base text-[#5C5955]">
                                        {formatPublishedAt(news?.publishedAt)}
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-8">
                                    <img
                                        className="w-full"
                                        src={news?.urlToImage}
                                        alt="thumb"
                                    />
                                    {
                                        news?.author && <p className="mt-5 text-base text-[#5C5955]">
                                            Author: {news?.author}
                                        </p>
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="col-span-12 self-start xl:col-span-4">

                    <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">

                        {
                            rightData?.map((news, _idx) => (
                                <div key={_idx} className="col-span-12 md:col-span-8">

                                    <div className="col-span-12 md:col-span-4">
                                        <a href="#"
                                        ><h3
                                            className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                        >
                                                {news?.title}
                                            </h3></a
                                        >
                                        <p className="mt-5 text-base text-[#5C5955]">
                                            {formatPublishedAt(news?.publishedAt)}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBoard;