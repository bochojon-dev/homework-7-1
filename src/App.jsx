import "./App.css";
import Admin from "./pages/admin-panel/Admin";
import CreateProducts from "./pages/create-products/CreateProducts";
import ManageProducts from "./pages/manage-products/ManageProducts";
import Products from "./components/products/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CreateProducts />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="admin" element={<Admin />} />
        <Route path="create" element={<CreateProducts />} />
        <Route path="manage" element={<ManageProducts />} />
      </Routes>
    </div>
  );
}

export default App;
