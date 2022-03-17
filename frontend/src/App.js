import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/landing";
import { Container } from "react-bootstrap";
import TdaDashboard from "./pages/tdaDashboard";
//import SingleProfile from "./pages/SingleProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProfile from "./pages/CreateProfile";
import Profile from "./pages/profile";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


            <Route
              path="/tdaDashboard" element={<TdaDashboard search={search} />}/>

          <Route
            element={<RequireAuth allowedRoles={["participant", "tda"]} />}>
            <Route path="/createprofile" element={<CreateProfile />} />
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["participant", "tda"]} />}>
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
