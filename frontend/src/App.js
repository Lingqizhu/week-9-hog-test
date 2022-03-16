import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
//import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/landing";
import { Container } from "react-bootstrap";
import MyProfile from "./pages/MyProfile";
//import SingleProfile from "./pages/SingleProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import CreateProfile from "./pages/CreateProfile";
//import Profiles from "./pages/Profiles";

function App() {


  return (
<Router>
  <Header/>
<Routes>
  <Route path = "/"  element={<LandingPage/>} />
  <Route path = "/login"  element={<Login/>} />
  <Route path = "/register"  element={<Register/>} />
  <Route path = "/myprofile"  element={<MyProfile/>} />
</Routes>
</Router>





  );
}

export default App;
