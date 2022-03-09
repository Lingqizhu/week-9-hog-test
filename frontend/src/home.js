import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        window.localStorage.removeItem("token")
        setAuth({});
        navigate('/');
    }

    return (
        <>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/ParticipantDashboard">Go to the ParticipantDashboard</Link>
            <br />
            <Link to="/EmployerDashboard">Go to the EmployerDashboard</Link>
            <br />
            <Link to="/TdaDashboard">Go to the TdaDashboard</Link>
            <br />

            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </>
    )
}

export default Home