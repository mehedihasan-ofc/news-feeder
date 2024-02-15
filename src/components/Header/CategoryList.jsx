import { useContext } from 'react';
import { CategoryContext } from '../../context';

const CategoryList = () => {

    const { setSelectedCategory } = useContext(CategoryContext);

    return (
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
            <li onClick={() => setSelectedCategory("general")}><a href="#">General</a></li>
            <li onClick={() => setSelectedCategory("business")}><a href="#">Business</a></li>
            <li onClick={() => setSelectedCategory("entertainment")}><a href="#">Entertainment</a></li>
            <li onClick={() => setSelectedCategory("health")}><a href="#">Health</a></li>
            <li onClick={() => setSelectedCategory("science")}><a href="#">Science</a></li>
            <li onClick={() => setSelectedCategory("sports")}><a href="#">Sports</a></li>
            <li onClick={() => setSelectedCategory("technology")}><a href="#">Technology</a></li>
        </ul>
    );
};

export default CategoryList;