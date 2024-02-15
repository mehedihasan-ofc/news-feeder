import { useContext, useState } from 'react';
import SearchIcon from '../../assets/icons/search.svg';
import { SearchContext } from '../../context';
import { useDebounce } from '../../hooks';

const SearchBox = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const { setSearchTerm } = useContext(SearchContext);

    const doSearch = useDebounce((term) => {
        setSearchTerm(term);
    }, 1000);

    function handleChange(e) {
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <div className="relative">
            <img src={SearchIcon} alt="Search" onClick={() => setIsSearchOpen(!isSearchOpen)} />
            {isSearchOpen && (
                <div className="absolute top-0 right-0 mt-12 bg-white border border-gray-300 rounded p-2 flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleChange}
                        className="rounded mr-2 outline-none"
                        required
                    />
                </div>
            )}
        </div>
    );
};

export default SearchBox;