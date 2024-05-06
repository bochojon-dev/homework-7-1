import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin-panel/Admin";
import Login from "./pages/login/Login";
import CreateProducts from "./pages/create-products/CreateProducts";
import ManageProducts from "./pages/manage-products/ManageProducts";
import Products from "./components/products/Products";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/"} element={<Auth />}>
          <Route path="admin" element={<Admin />} />
          <Route path="create" element={<CreateProducts />} />
          <Route path="manage" element={<ManageProducts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
