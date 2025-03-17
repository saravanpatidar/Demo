import axios from "axios";
import { useEffect, useState } from "react";

import Products from "../../components/Products";
import InfiniteScroll from "react-infinite-scroll-component";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [page,setPage]= useState(0);
    const [hasMore,setHasMore]=useState(true);
    const [loading,setLoading] = useState(false);
    

    const fetchProductData = async () => {
        if(loading || !hasMore) return;
        setLoading(true);
        try{
            const { data } = await axios.get(`http://localhost:3001/shop/products?limit=10&skip=${page*10}`);
            if(data.success){
                setLoading(false);
                setPage(prevPage=>prevPage+1)
                setProducts((prevProduct)=>[...prevProduct,...data.products]);

                if(data?.products.length ===0){
                    setHasMore(false);
                }
            }
           
        }catch(err){
            console.log('Error fetching ',err);
            setHasMore(false) 
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    

    

    return <div className="w-full h-screen py-14 dark:bg-sky-600 ">
        <InfiniteScroll
            dataLength={products.length}
            next={fetchProductData}
            hasMore={hasMore}
            loader={<p className=" font-extrabold text-xl px-6 text-center">Loading...</p>}
            endMessage={
                <p className="text-center">
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <Products products={products} />
        </InfiniteScroll>
            
    </div>
}

export default Dashboard;