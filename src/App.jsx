import { Routes, Route } from "react-router";
import TamplateSignUp from "./Routers/TamplateSignUp.jsx";
import PersonalSignUp from "./Pages/Auth/PersonalSignUp.jsx";
import BussinessSignUp from "./Pages/Auth/BussinessSignUp.jsx";
import SignIn from "./Pages/Auth/SignIn.jsx";
import ForgetPassword from "./Pages/Auth/ForgetPassword.jsx";
import ConfirmEmail from "./Pages/Auth/ConfirmEmail.jsx";
import ResetPassword from "./Pages/Auth/ResetPassword.jsx";

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
    </Routes>
  );
}

export default App;
