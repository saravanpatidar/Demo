import { useNavigate } from "react-router-dom";


const UnAuth_page=()=>{
    const navigate = useNavigate();
    return <div className="p-10">
        <h1 className=" text-bold">Un-Authorized Page</h1>
        <button onClick={()=>navigate('/shop')} className="bg-blue-400 text-white px-3 py-1 rounded-2xl mt-4">Go to Home</button>
    </div>
}

export default UnAuth_page;