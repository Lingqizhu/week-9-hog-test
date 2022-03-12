import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
//import "./Login.css";
import AuthContext from './AuthProvider'
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useContext(AuthContext);
  const [token,changeToken] = useState(window.localStorage.getItem("token"))

  const loggedIn = (newToken) => {
    window.localStorage.setItem("token",newToken)
    changeToken(newToken);
  }


  async function handleSubmit(event) {
    event.preventDefault();
    //const response =
    await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((response)=>response.json())
    .then((data)=>{
      const role = data.role;
      const token = data.token;
      const location = data.location;
      const available = data.available;
      const picture = data.picture;
      loggedIn(token)
      setAuth({email,password,role,token,location,available,picture})
      console.log(role)
      console.log(token)
      navigate("/home")
     // navigate(from, {replace:true})
    })

  }

  return (
    <div className="loginbackground">
      <form onSubmit={handleSubmit} className="login">
        <h2></h2>
        <h4>Login</h4>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" className="submit" value="Login" />
        <input
          type="submit"
          className="submit"
          value="Register"
          onClick={() => {
            navigate("/Register");
          }}
        />
      </form>
    </div>
  );
}

export default Login;
