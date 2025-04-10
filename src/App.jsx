import { Routes, Route } from "react-router";
import TamplateSignUp from "./Routers/TamplateSignUp.jsx";
import PersonalSignUp from "./Pages/Auth/PersonalSignUp.jsx";
import BussinessSignUp from "./Pages/Auth/BussinessSignUp.jsx";
import SignIn from "./Pages/Auth/SignIn.jsx";
import ForgetPassword from "./Pages/Auth/ForgetPassword.jsx";
import ConfirmEmail from "./Pages/Auth/ConfirmEmail.jsx";
import ResetPassword from "./Pages/Auth/ResetPassword.jsx";
import Home from "./Pages/Home";
import DashboardLayout from "./Routers/DashboardLayout.jsx";
import StatStore from "./Pages/StatStore";
import Shopes from "./Pages/Shopes";
import ShopProduct from "./Pages/ShopProduct.jsx";
import Classification from "./Pages/Classification.jsx";
import ShipmentsAdmin from "./Pages/Admin/ShipmentsAdmin.jsx";
import ShipmentDetails from "./Pages/ShimpentDetails";
import Customer from "./Pages/Customer.jsx";
import Bills from "./Pages/Bills.jsx";
import Wallet from "./Pages/Wallet.jsx";
import AdminDashLayout from "./Routers/AdminDashLayout";
import Company from "./Pages/Admin/Company";
import Users from "./Pages/Admin/Users.jsx";
import HomeAdmin from "./Pages/Admin/HomeAdmin.jsx";
import WalletAdmin from "./Pages/Admin/WalletAdmin.jsx";
import AddShipments from "./Pages/AddShipments.jsx";
import Shipments from "./Pages/Shipments.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TamplateSignUp />}>
        <Route index element={<PersonalSignUp />} />
        <Route path="bussinessSignUp" element={<BussinessSignUp />} />
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/confirmemail" element={<ConfirmEmail />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="/home" element={<DashboardLayout />}>
        <Route index element={<Home />} />

        <Route path="statistics">
          <Route index />
          <Route path="statstore" element={<StatStore />} />
          <Route path="financial" />
          <Route path="store" />
        </Route>

        <Route path="stores">
          <Route index element={<Shopes />} />
          <Route path="product" element={<ShopProduct />} />
          <Route path="classification" element={<Classification />} />
        </Route>

        <Route path="shipments">
          <Route path="addshipment" element={<AddShipments />} />
          <Route path="checkout" element={<ShipmentDetails />} />
          <Route index element={<Shipments />} />
          <Route path="customer" element={<Customer />} />
          <Route path="bills" element={<Bills />} />
          <Route path="ticket" />
        </Route>

        <Route path="wallet">
          <Route index element={<Wallet />} />
        </Route>
      </Route>
      <Route path="/admin" element={<AdminDashLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="company" element={<Company />} />
        <Route path="users" element={<Users />} />
        <Route path="shipments" element={<ShipmentsAdmin />} />
        <Route path="wallet" element={<WalletAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
