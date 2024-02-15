import { useState } from "react";
import { CategoryContext } from "../context";

const CategoryProvider = ({ children }) => {

    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;