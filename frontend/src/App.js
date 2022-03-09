import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { ApiClient } from "./apiClient";
import Login from "./Login";
import Register from "./Register";
import Home from "./home";
//import Dashboard from "./Dashboard";
//import Profile from "./Profile";
//import NaviBar from "./NaviBar";
import EmployerDashboard from "./EmployerDashboard";
import ParticipantDashboard from "./ParticipantDashboard";
import TdaDashboard from "./TdaDashboard";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";

/* const ROLES = {
  participant:  2001,
  employer: 1984,
  tda: 5150,
}; */

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        <Route element={<RequireAuth allowedRoles={["participant","tda"]} />}>
          <Route path="ParticipantDashboard" element={<ParticipantDashboard />}/>
        </Route>
        <Route element={<RequireAuth allowedRoles={"employer"} />}>
          <Route path="EmployerDashboard" element={<EmployerDashboard />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"tda"} />}>
          <Route path="TdaDashboard" element={<TdaDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
