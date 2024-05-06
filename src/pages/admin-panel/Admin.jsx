import React, { useState } from "react";
import "../admin-panel/Admin.css";
import { Link } from "react-router-dom";
import Dashboard from "../../components/dashboard/Dashboard";

const Admin = () => {
  const [buttonClass, setButtonClass] = useState("");
  const handleClick = () => {
    setButtonClass("show");
  };
  return (
    <div className="admin">
      <div className="container">
        <div className="admin_contents">
          <Dashboard />
          <h2>salom</h2>
        </div>
      </div>
    </div>
  );
};

export default Admin;
