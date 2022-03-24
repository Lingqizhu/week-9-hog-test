import { Navigate, useLocation, Outlet,Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const RequireAuth = ({allowedRoles})=>{
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    //const navigate=useNavigate();
    const location=useLocation();
    console.log(userInfo)
   /*  const notAllowed=()=>{
        alert("you are not allowed")
        navigate("/")
    } */
    return (
        allowedRoles.includes(userInfo.role)?
        <Outlet/>
        :<Navigate to ="/landingpage" state={{from: location}} replace />
    );
}

export default RequireAuth;