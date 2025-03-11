import SearchProduct from "./SearchProduct";


function ProductCard({ products,search ,handleSearchChange}) {
    return (
        <div className="bg-white dark:bg-blue-300">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <SearchProduct search={search} handleSearchChange={handleSearchChange}  />
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <img
                                alt={product.imageAlt}
                                src={product.thumbnail}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-square lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;