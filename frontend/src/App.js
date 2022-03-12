import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { ApiClient } from "./apiClient";
import Login from "./Login";
import Register from "./Register";
import Home from "./home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Employer from "./Employer";
import View from "./View";
import NaviBar from "./NaviBar";
import EmployerDashboard from "./EmployerDashboard";
import ParticipantDashboard from "./ParticipantDashboard";
import TdaDashboard from "./TdaDashboard";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        <Route element={<RequireAuth allowedRoles={["participant","tda"]} />}>
          <Route path="ParticipantDashboard" element={<ParticipantDashboard/>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["participant","tda","employer"]} />}>
          <Route path="EmployerDashboard" element={<EmployerDashboard/>} />
          </Route>
        <Route element={<RequireAuth allowedRoles={["participant","tda","employer"]} />}>
          <Route path="TdaDashboard" element={<TdaDashboard/>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["participant","tda","employer"]} />}>
          <Route path="NaviBar" element={<NaviBar/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["participant","tda"]} />}>
          <Route path="Profile" element={<Profile />}/>
        </Route>
        <Route element={<RequireAuth allowedRoles={"employer"} />}>
          <Route path="Employer" element={<Employer/>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["participant","tda","employer"]} />}>
          <Route path="View" element={<View/>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["participant","tda","employer"]} />}>
          <Route path="Dashboard" element={<Dashboard/>} />
        </Route>


      </Route>
    </Routes>
  );
};

export default App;
