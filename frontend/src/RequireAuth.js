import { useLocation, Navigate, Outlet} from "react-router-dom";
import { useContext } from "react";
import AuthContext from './AuthProvider'

const RequireAuth = ({allowedRoles})=>{
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    return (
        //auth.role===allowedRoles?
        allowedRoles.includes(auth.role)?
        <Outlet/>
        :<Navigate to ="/" state={{from: location}} replace />
    );
}

export default RequireAuth;