import { useEffect, useRef, useState } from "react";
import ProductCard from "../../components/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";


function Products() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState("");
    let timeout = useRef(null);


    const fetchProducts = async (searchQuery = '') => {
        if (loading) return; // Prevent multiple requests at once
        setLoading(true);

        const res = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}&limit=10&skip=${page * 10}`);
        const data = await res.json();

        setProducts(prevProducts => [...prevProducts, ...data?.products])
        setLoading(false);
        setPage(prevPage => prevPage + 1)
        if (data?.products?.length === 0) setHasMore(false)
    }


    const handleSearchChange = (e) => {
        const searchQuery = e.target.value;
        setSearch(searchQuery);
        setProducts([]);
        setPage(0);
        // fetchProducts(searchQuery); 

        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            fetchProducts(searchQuery);
        }, 1000)
    }


    useEffect(() => {
        fetchProducts(search);
    }, [])


    return <>
        <InfiniteScroll
            dataLength={products.length}
            next={() => fetchProducts(search)}
            hasMore={hasMore}
            loader={<p className=" font-extrabold text-2xl px-3">Loading...</p>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            className="pl-10"
        >
            <ProductCard products={products} search={search} handleSearchChange={handleSearchChange} />
        </InfiniteScroll >
    </>
}


export default Products;