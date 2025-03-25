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

function App() {
  return (
    <Routes>
      <Route path="/" element={<TamplateSignUp />}>
        <Route index element={<PersonalSignUp />} />
        <Route path="bussinessSignUp" element={<BussinessSignUp />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/confirmEmail" element={<ConfirmEmail />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/home" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/home/statistics" element={<Statistics />} />
        <Route path="/home/statistics/statstore" element={<StatStore />} />
        <Route path="/home/stores" element={<Shopes />} />
        <Route path="/home/stores/product" element={<ShopProduct />} />
        <Route path="/home/stores/classification" element={<Classification/>}/>
      </Route>
    </Routes>
  );
}

export default App;
