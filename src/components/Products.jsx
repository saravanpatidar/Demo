import axios from "axios";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails.";
import { useState } from "react";

const Products=({products})=>{
    const { user } = useSelector((state) => state.auth);
    
    const [isOpen, setIsOpen] = useState(false);
    const [productId, setProductId] = useState(null);
console.log(products);

    const handleCart = async (productId) => {
        if (!user) {
            alert('Please login first to add cart items!!')
            return;
        }
        try { 
            const {data} =await axios.post('http://localhost:3001/shop/cart/add-to-cart',
                {userId:user?.id,productId,quantity:1 }
            )
            console.log(data);
            

        }catch(err){
            console.log(err);
            
        }
    }
    const handleProductDetails= (getProductId)=>{
        setIsOpen(true)
        setProductId(getProductId);
    }

    return <div className="container mx-auto px-6 text-center">
    <h2 className=" dark:text-white text-4xl font-semibold text-gray-800 mb-6">
        Welcome to Our Website!
    </h2>
    <div className="bg-white dark:bg-blue-300">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product._id} onClick={()=>handleProductDetails(product._id)} className="group relative">
                        <img
                            alt={product.name}
                            src={`http://localhost:3001/public/${product.image}`}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-square lg:h-80"
                        />
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-gray-700">
                                    {product.name}
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${product.price}</p>
                        </div>
                        <button onClick={(e) =>{ e.stopPropagation();handleCart(product._id)}} className="text-sm cursor-pointer bg-sky-100 w-full font-semibold p-0.5">Add to cart</button>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
    <ProductDetails productId={productId} open={isOpen} setClose={setIsOpen} />
</div>
}


export default Products;