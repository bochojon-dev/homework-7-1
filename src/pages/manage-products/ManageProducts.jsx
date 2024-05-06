import Dashboard from "../../components/dashboard/Dashboard";
import React from "react";
import "../manage-products/ManageProducts.css";

const ManageProducts = () => {
  return (
    <div className="manage">
      <div className="container">
        <div className="manage_contents">
          <Dashboard />
          <h2>ManageProducts</h2>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
