import { useNavigate,Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({allowedRoles})=>{
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const navigate=useNavigate();
    console.log(userInfo)

    return (
        allowedRoles.includes(userInfo.role)?
        <Outlet/>
        :navigate("/")
    );
}

export default RequireAuth;