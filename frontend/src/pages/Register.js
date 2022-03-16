
import { useState } from "react";
import { useNavigate} from "react-router-dom";
//import "./Register.css";
import axios from 'axios';

function Register() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password
      }),
    });
  }


  return (
    <div  className="registerbackground">
      <form onSubmit={registerUser} className="register">
      <h2>Event App</h2>
      <h4>Register</h4>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          id="registerinput"
        />
        <br />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          id="registerinput"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="registerinput"
        />
        <br />
        <input type="submit" className="submit" value="Register" />
        <input type="submit" className="submit" value="login" onClick={()=>{navigate("/")}} />
      </form>
    </div>
  );
}

export default Register;