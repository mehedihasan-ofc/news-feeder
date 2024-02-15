const NewsNotFound = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center mt-5">
                <h1 className="text-4xl font-bold mb-4">News Not Found</h1>
                <p className="text-lg text-gray-600">Sorry, we couldn't find any news matching your search.</p>
            </div>
        </div>
    );
};

export default NewsNotFound;