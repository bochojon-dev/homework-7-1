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

  const users = data?.map((e) => (
    <div key={e.id} className="card">
      <img src={e.image} alt="user" />
      <h3>{e.name}</h3>
      <p>{e.age}</p>
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
