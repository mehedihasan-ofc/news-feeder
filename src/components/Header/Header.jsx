import TodayDateTime from './TodayDateTime';
import Logo from './Logo';
import SearchBox from './SearchBox';
import CategoryList from './CategoryList';

const Header = () => {
    return (
        <nav className="border-b border-black py-6 md:py-8">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                <TodayDateTime />
                <Logo />
                <SearchBox />
            </div>
            <div className="container mx-auto mt-6">
                <CategoryList />
            </div>
        </nav>
    );
};

export default Header;
