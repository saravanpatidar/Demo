
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen } from '../../store/cart-slice/cart-slice'
import { useEffect, useState } from 'react'
import axios from 'axios'


const CartPage = () => {
    const { isOpen } = useSelector(state => state.cart);
    const { user } = useSelector((state) => state.auth);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();

    const totalAmount = cartItems.reduce((total, item) => {
        return total += (item.productId.price * item.quantity)
    }, 0)



    const fetchCartItems = async () => {
        const { data } = await axios.get(`http://localhost:3001/shop/cart/${user.id}`);
        if (data.success) {
            setCartItems(data.cartItems);
        }

    }

    useEffect(() => {
        fetchCartItems();
    }, [isOpen])

    const handleDeleteCart = async (cartId) => {
        const { data } = await axios.delete(`http://localhost:3001/shop/cart/${user.id}/${cartId}`);
        if (data.success) {
            setCartItems(data.cartItems);
        }
    }

    const handleQunatityUpdate = async (getCartItem, typeOfAction) => {
        const { data } = await axios.put(`http://localhost:3001/shop/cart/${user.id}/${getCartItem?.productId?._id}`, { action: typeOfAction });
        if (data.success) {
            console.log("update quantity", data.cartItems)
            setCartItems(data.cartItems);
        }

    }

    return (
        <Dialog open={isOpen} onClose={() => dispatch(setIsOpen(false))} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={() => dispatch(setIsOpen(false))}
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Close panel</span>
                                                <FaTimes aria-hidden="true" className="size-6" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {cartItems.map((cartItem) => (
                                                    console.log(cartItem),

                                                    <li key={cartItem._id} className="flex py-6">
                                                        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img alt={cartItem.productId.name} src={cartItem.productId.image} className="size-full object-cover" />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        {cartItem.productId.name}
                                                                    </h3>
                                                                    <p className="ml-4">{cartItem.productId.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                <div className='space-x-3'>
                                                                    <button disabled={cartItem.quantity <= 1 ? true : false} onClick={() => handleQunatityUpdate(cartItem, 'minus')}
                                                                        className={'font-bold text-xl cursor-pointer text-red-400 disabled:text-red-200'}>-</button>
                                                                    <span className="text-gray-500">{cartItem.quantity}</span>
                                                                    <button onClick={() => handleQunatityUpdate(cartItem, 'add')} className=' font-bold text-xl cursor-pointer text-green-400 disabled:text-green-200'>+</button>
                                                                </div>

                                                                <div className="flex">
                                                                    <button onClick={() => handleDeleteCart(cartItem.productId._id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${totalAmount}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or{' '}
                                            <button
                                                type="button"
                                                onClick={() => dispatch(setIsOpen(false))}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default CartPage;