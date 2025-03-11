import { FaCalendar, FaCartPlus, FaFile, FaHome, FaProductHunt, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {

    function handleTheme() {
        document.body.classList.toggle('dark');
    }
    return (
        <div className='flex'>
            <div className="fixed max-w-60 bg-gray-100 dark:bg-sky-500 dark:text-white shadow h-screen">

                <h2 className="font-bold text-3xl text-center pt-4">Sidebar</h2>
                <ul className="p-4 flex flex-col gap-4">
                    <Link to='/shop/'><li className="font-semibold flex items-center gap-2 text-xl"><FaHome />Dashboard</li></Link>
                    <Link to='/shop/form'><li className="font-semibold flex items-center gap-2 text-xl"><FaUserAlt />Form Page</li></Link>
                    <Link to='/shop/products'><li className="font-semibold flex items-center gap-2 text-xl"><FaProductHunt />All Products</li></Link>
                    <Link><li className="font-semibold flex items-center gap-2 text-xl"><FaCartPlus />Orders</li></Link>
                    <Link><li className="font-semibold flex items-center gap-2 text-xl"><FaCalendar />Calender</li></Link>
                    <Link><li className="font-semibold flex items-center gap-2 text-xl"><FaFile />Reports</li></Link>
                </ul>
                <div className="m-auto w-50 rounded-full h-0.5 bg-black mt-5 "></div>
                <div className='flex flex-col items-baseline gap-3 pl-4'>
                    <button onClick={handleTheme} className='hover:bg-gray-300 cursor-pointer p-2 font-semibold m-2  rounded-2xl'>Dark mode</button>
                    <button className=' hover:bg-gray-300 cursor-pointe p-2 font-semibold m-2  rounded-2xl'>Logout</button>
                </div>
            </div>
            <div className='w-full ml-40 '>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar; 