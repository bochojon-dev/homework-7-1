import Dashboard from "../../components/dashboard/Dashboard";
import axios from "../../api";
import "../create-products/CreateProducts.css";
import React, { useState } from "react";

const initialState = {
  name: "",
  age: "",
};

const CreateProducts = () => {
  const [data, setData] = useState(initialState);

  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post("/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <div className="container">
        <div className="create_contents">
          <Dashboard />
          <h2>CreateProducts</h2>
          <form onSubmit={handleCreateUser}>
            <input
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Name"
            />
            <input
              value={data.age}
              onChange={(e) =>
                setData((prev) => ({ ...prev, age: e.target.value }))
              }
              type="number"
              placeholder="Age"
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
