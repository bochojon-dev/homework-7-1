import Dashboard from "../../components/dashboard/Dashboard";
import React, { useState, useEffect } from "react";
import "../manage-products/ManageProducts.css";
import axios from "../../api";

const ManageProducts = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [reload]);
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  const users = data?.map((e) => (
    <div key={e.id} className="card">
      <img src={e.image} alt="user" />
      <h3>{e.name}</h3>
      <p>{e.age}</p>
      <button onClick={() => handleDeleteUser(e.id)}>Delete</button>
    </div>
  ));
  return (
    <div className="manage">
      <div className="container">
        <div className="manage_contents">
          <Dashboard />
          <h2>ManageProducts</h2>
          <div className="wrapper">{users}</div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
