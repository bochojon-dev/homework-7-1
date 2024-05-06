import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dshboard">
      <div className="aside">
        <h3>
          <Link to={"/create"}>Create Products</Link>
        </h3>
        <h3>
          <Link to={"/manage"}>Manage Products</Link>
        </h3>
      </div>
    </div>
  );
};

export default Dashboard;
