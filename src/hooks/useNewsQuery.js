import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../context";

const useNewsQuery = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);
    const { selectedCategory } = useContext(CategoryContext);
    const { searchTerm } = useContext(SearchContext);

    const fetchNewsData = async (category, searchTerm) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching news data..."
            });

            if (searchTerm) {
                const res = await fetch(`http://localhost:8000/v2/search?q=${searchTerm}`);
                const data = await res.json();
                setNewsData(data?.result);
            } else if (category) {
                const res = await fetch(`http://localhost:8000/v2/top-headlines?category=${category}`);
                const data = await res.json();
                setNewsData(data?.articles);
            } else {
                const res = await fetch(`http://localhost:8000/v2/top-headlines`);
                const data = await res.json();
                setNewsData(data?.articles);
            }

        } catch (error) {
            setError(error);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    };

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "News finding..."
        });

        if (searchTerm) {
            fetchNewsData(null, searchTerm);
        } else if (selectedCategory) {
            fetchNewsData(selectedCategory, null);
        } else {
            fetchNewsData();
        }

    }, [selectedCategory, searchTerm]);

    return {
        newsData,
        error,
        loading
    };
};

export default useNewsQuery;
