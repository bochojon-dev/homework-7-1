import React, { useEffect, useState } from "react";
import axios from "../../api";

const Products = () => {
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
  // console.log(data.name);
  const users = data?.map((e) => (
    <div key={e.id} className="card">
      <img src={e.image} alt="user" />
      <h3>{e.name}</h3>
      <p>{e.age}</p>
      <button onClick={() => handleDeleteUser(e.id)}>Delete</button>
    </div>
  ));
  return (
    <div>
      <h2>Products</h2>
      <div className="wrapper">{users}</div>
    </div>
  );
};

export default Products;
