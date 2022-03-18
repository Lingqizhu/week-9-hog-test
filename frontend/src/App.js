import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/landing";
import { Container } from "react-bootstrap";
import TdaDashboard from "./pages/tdaDashboard";
import EmployerDashboard from "./pages/employerDashboard";
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
          <Route path="/" element={<Login />} exact />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />

          <Route
            element={<RequireAuth allowedRoles={["tda"]} />}>
            <Route path="/tdaDashboard" element={<TdaDashboard search={search} />}/>
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["tda","employer"]} />}>
            <Route path="/employerDashboard" element={<EmployerDashboard search={search} />}/>
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["participant", "tda"]} />} >
            <Route path="/createprofile" element={<CreateProfile />} />
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["participant", "tda","employer"]} />} >
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
