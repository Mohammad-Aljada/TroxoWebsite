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
import Statistics from "./Pages/Statistics";
import StatStore from "./Pages/StatStore";
import Shopes from './Pages/Shopes';
import ShopProduct from "./Pages/ShopProduct.jsx";
import Classification from "./Pages/Classification.jsx";
import Shipments from "./Pages/Shipments.jsx";
import ShipmentsAddANewStore from './Pages/ShipmentsAddANewStore';
import ShipmentDetails from './Pages/ShimpentDetails';
import ShipmentStatus from "./Pages/ShipmentStatus.jsx";
import Customer from "./Pages/Customer.jsx";

function App() {

  return (
    <Routes>
  <Route path="/" element={<TamplateSignUp />}>
    <Route index element={<PersonalSignUp />} />
    <Route path="bussinessSignUp" element={<BussinessSignUp />} />
  </Route>
  
  <Route path="/signin" element={<SignIn />} />
  <Route path="/forget-password" element={<ForgetPassword />} />
  <Route path="/confirm-email" element={<ConfirmEmail />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  
  <Route path="/home" element={<DashboardLayout />}>
    <Route index element={<Home />} />
    
    <Route path="statistics">
      <Route index element={<Statistics />} />
      <Route path="statstore" element={<StatStore />} />
    </Route>
    
    <Route path="stores">
      <Route index element={<Shopes />} />
      <Route path="product" element={<ShopProduct />} />
      <Route path="classification" element={<Classification />} />
    </Route>
    
    <Route path="shipments">
      <Route index element={<Shipments />} />
      <Route path="addnewstore" element={<ShipmentsAddANewStore />} />
      <Route path="details" element={<ShipmentDetails />} />
      <Route path="shipmentstatus" element={<ShipmentStatus />} />
      <Route path="customer" element={<Customer />} />
    </Route>
  </Route>
</Routes>
  );
}

export default App;
