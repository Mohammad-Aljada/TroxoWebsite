import { Routes, Route } from "react-router";
import TamplateSignUp from "./Routers/TamplateSignUp.jsx";
import PersonalSignUp from "./Pages/PersonalSignUp.jsx";
import BussinessSignUp from "./Pages/BussinessSignUp.jsx";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TamplateSignUp />}>
        <Route index element={<PersonalSignUp />} />
        <Route path="bussinessSignUp" element={<BussinessSignUp />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
