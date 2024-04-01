import { Route, Routes } from "react-router-dom";
import { Customers, Dashboard, Inventory, Orders } from "./pages";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default routes;
