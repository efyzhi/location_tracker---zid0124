import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./dashboard.css";

import Map from "./Map";

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <div>
        <h1>Dashboard</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;
