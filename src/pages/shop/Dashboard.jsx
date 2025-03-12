import axios from "axios";
import { useEffect,useState } from "react";

function Dashboard() {
    const [products,setProducts] =useState([]);

    const fetchProductData = async()=>{
        const {data} = await axios.get('http://localhost:3001/shop/products');
        console.log(data?.products);
        
        setProducts(data?.products);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    return <div className="w-full h-screen py-14 dark:bg-sky-600 ">
        <div className="container mx-auto px-6 text-center">
            <h2 className=" dark:text-white text-4xl font-semibold text-gray-800 mb-6">
                Welcome to Our Website!
            </h2>
            <div className="bg-white dark:bg-blue-300">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product._id} className="group relative">
                            <img
                                alt={product.name}
                                src={`http://localhost:3001/${product.image}`}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-square lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
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
        </div>
    </div>
}

export default Dashboard;