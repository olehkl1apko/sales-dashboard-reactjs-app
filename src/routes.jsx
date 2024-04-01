import { Route, Routes } from "react-router-dom";
import { Customers, Dashboard, Inventory, Orders } from "./pages";

function routes() {
  return (
    <div style={{ paddingLeft: "12px" }}>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
    </div>
  );
}
export default routes;
