

function SearchProduct({ search, handleSearchChange }) {

    return <div className="fixed top-0 py-5 px-3 z-20 bg-white dark:bg-blue-300 w-full">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Lists</h2>
        <input className="bg-gray-100 w-2/3 p-1 rounded" type="text" placeholder="Search..."
            onChange={handleSearchChange} value={search} />
    </div>
}

export default SearchProduct;