import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
//import "./Login.css";
//import AuthContext from './AuthProvider'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //const [token, changeToken] = useState(window.localStorage.getItem("token"));


  async function handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:3001/login", {
      email,
      password,
    });
    console.log(data);
    window.localStorage.setItem("userInfo", JSON.stringify(data));

  }

  return (
    <div className="loginbackground">
      <Container>
        <br />
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit" value="Login">
            Login
          </Button>
          <br />
          <br />
          <h4>New user?</h4>
          <Button
            variant="warning"
            type="submit"
            value="Register"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
