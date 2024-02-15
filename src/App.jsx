import Page from './Page';
import CategoryProvider from './provider/CategoryProvider';
import NewsProvider from './provider/NewsProvider';
import SearchProvider from './provider/SearchProvider';

const App = () => {
  return (
    <SearchProvider>
      <CategoryProvider>
        <NewsProvider>
          <Page />
        </NewsProvider>
      </CategoryProvider>
    </SearchProvider>
  );
};

export default App;