import axios from "axios";
import { useState } from "react";



const CreateProduct = () => {
    const [productData, setProductData] = useState({
        image: null,
        name: "",
        price: "",
        brand: "",
        category: '',
        stocks: '',
        quantity: '',
        rating: ''
    });

    const onFileChange = (e) => {
        const file = e.target.files[0];
        setProductData((prevData) => ({ ...prevData, image: file ? file:''}))

    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', productData.name);
            formData.append('price', productData.price);
            formData.append('brand', productData.brand);
            formData.append('category', productData.category);
            formData.append('stocks', productData.stocks);
            formData.append('quantity', productData.quantity);
            formData.append('rating', productData.rating);
            formData.append('image', productData.image);

            const { data } = await axios.post('http://localhost:3001/shop/create-product', formData);
            if (data?.success) {
                console.log(data.msg);
                setProductData({
                    image: null,
                    name: "",
                    price: "",
                    brand: "",
                    category: '',
                    stocks: '',
                    quantity: '',
                    rating: ''
                })
            }
        } catch (err) {
            // console.log(err);
            if (err.response && err?.response?.data?.message) {
                console.log(err?.response?.data?.message);
            }
        }

    }

    return <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Add Product
            </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label htmlFor="image" className="block text-sm/6 font-medium text-gray-900">
                        Product Image
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={onFileChange}
                            id="image"
                            name="image"
                            type="file"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                        Product Name
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.name}
                            onChange={handleOnChange}
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                        Price
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.price}
                            onChange={handleOnChange}
                            id="price"
                            name="price"
                            type="Number"
                            required
                            autoComplete="price"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                        Category
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.category}
                            onChange={handleOnChange}
                            id="category"
                            name="category"
                            type="text"
                            required
                            autoComplete="category"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="brand" className="block text-sm/6 font-medium text-gray-900">
                        Brand
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.brand}
                            onChange={handleOnChange}
                            id="brand"
                            name="brand"
                            type="text"
                            required
                            autoComplete="brand"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm/6 font-medium text-gray-900">
                        Rating
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.rating}
                            onChange={handleOnChange}
                            id="rating"
                            name="rating"
                            type="Number"
                            required
                            autoComplete="rating"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-sm/6 font-medium text-gray-900">
                        Quantity
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.quantity}
                            onChange={handleOnChange}
                            id="quantity"
                            name="quantity"
                            type="Number"
                            required
                            autoComplete="quantity"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="stocks" className="block text-sm/6 font-medium text-gray-900">
                        Stocks
                    </label>
                    <div className="mt-2">
                        <input
                            value={productData.stocks}
                            onChange={handleOnChange}
                            id="stocks"
                            name="stocks"
                            type="Number"
                            required
                            autoComplete="stocks"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add
                    </button>
                </div>
            </form>

        </div>
    </div>
}


export default CreateProduct;