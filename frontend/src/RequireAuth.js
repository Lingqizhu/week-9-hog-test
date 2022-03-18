import { useNavigate,Outlet,Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const RequireAuth = ({allowedRoles})=>{
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const navigate=useNavigate();
    console.log(userInfo)
   /*  const notAllowed=()=>{
        alert("you are not allowed")
        navigate("/")
    } */
    return (
        allowedRoles.includes(userInfo.role)?
        <Outlet/>
        :<Link to="/"/>
    );
}

export default RequireAuth;