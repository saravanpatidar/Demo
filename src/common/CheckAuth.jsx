import { Navigate, Outlet, useLocation } from "react-router-dom";



const CheckAuth = ({ isAuthenticated }) => {
    

    const location = useLocation();

    if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('register'))) {
        return <Navigate to="/auth/login" />
    }
    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('register'))) {
        console.log(isAuthenticated);
        
        return <Navigate to="/shop" />
    }

    return <>
        <Outlet />
    </>
}

export default CheckAuth;