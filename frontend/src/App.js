import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import PieChart from "./components/PieChart";
import LandingPage from "./pages/landing";
import { Container } from "react-bootstrap";
import TdaDashboard from "./pages/tdaDashboard";
import EmployerDashboard from "./pages/employerDashboard";
import ParticipantDashboard from "./pages/participantDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProfile from "./pages/CreateProfile";
import ProfileDetail from "./pages/profileDetail";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import { useDispatch,useSelector } from "react-redux";
import {getProfiles} from "./actions/profilesActions";

function App() {
  const [search, setSearch] = useState("");
  const [currentId,setCurrentId] = useState(null)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getProfiles())
  },[currentId,dispatch])

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
            <Route path="/piechart" element={<PieChart />} />
            <Route path="/tdaDashboard" element={<TdaDashboard search={search} setCurrentId={setCurrentId} />}/>
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["tda","employer"]} />}>
            <Route path="/employerDashboard" element={<EmployerDashboard search={search}/>}/>
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["participant", "tda"]} />} >
            <Route path="/participantDashboard" element={<ParticipantDashboard setCurrentId={setCurrentId}/>} />
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["participant", "tda"]} />} >
            <Route path="/createprofile" element={<CreateProfile currentId={currentId} setCurrentId={setCurrentId}/>} />
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["participant", "tda","employer"]} />} >
            <Route path="/profile/:id" element={<ProfileDetail/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
