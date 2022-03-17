import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
//import "./Login.css";
//import AuthContext from './AuthProvider'
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { login } from "../actions/userActions";
import MainScreen from "../components/MainScreen";

function Login({history}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  /* const location = useLocation();
  const from = location.state?.from?.pathname || "/"; */

  //const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 useEffect(() => {
  if (userInfo) {
    history.push("/");
  }
}, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/");
  };

  return (
    <div className="loginbackground">
      <Container>
        <br />
        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
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
