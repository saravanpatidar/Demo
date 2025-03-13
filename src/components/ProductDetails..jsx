import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";


const ProductDetails = ({ productId, open, setClose }) => {
    const [product, setProduct] = useState([]);

    const fetchProductDetail =async(productId)=>{
        const {data} = await axios.get(`http://localhost:3001/shop/product/${productId}`);
        console.log(data);
        setProduct(data?.product)
    }
    const deleteProduct =async(productId)=>{
        const {data} = await axios.delete(`http://localhost:3001/shop/product/${productId}`);
        console.log(data);
        setProduct(data?.product)
    }

    useEffect(()=>{
        if(productId){
            fetchProductDetail(productId);
        }
    },[productId])

    const handleProductDelete=(deleteProductID)=>{
        deleteProduct(deleteProductID);
        setClose(false)
    }

    return <Dialog open={open} as='div' className='relative z-10 focus:outline-none' onClose={() => setClose(false)}>
        <div className="fixed z-10 inset-0 w-screen overflow-y-auto">

            <div className="flex min-h-full items-center  justify-center p-4">

                <DialogPanel transition className='w-full max-w-md bg-gray-500 p-4 rounded-xl backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'>
                    <Button
                        className="inline-flex items-center rounded-md bg-gray-700 mb-2 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                        onClick={() => setClose(false)}
                    >
                        <FaTimes/>
                    </Button>
                    <DialogTitle as='h2' className='text-2xl font-medium text-white'>
                        {product.name}
                    </DialogTitle>
                    <div>
                        <img src={product.image} alt={product.name} className="aspect-square w-60 m-4 bg-red-100 rounded-2xl" />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">
                       Price - ${product.price}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                       Category - {product.category}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                       Brand - {product.brand}
                    </p>
                    <Button onClick={()=>handleProductDelete(product._id)} className='bg-red-300 px-4 rounded-lg py-0.5 m-1 font-bold hover:bg-red-400' >
                        Delete
                    </Button>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
}


export default ProductDetails;