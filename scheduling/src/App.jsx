import { Routes, Route } from "react-router-dom";
import Manager from "./Manager/index";
import Home from "./Home";
import Nav from "./Nav/index.jsx";
import Login from "./Login/index";
import ResetPassword from "./ResetPassword/index";
import Profile from "./Profile/index";
import Contact from "./Contact/index";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
// import { Nav } from './Nav/index.jsx'

const PrivateRoute = ({ Item }) => {
  const { Login } = useContext(LoginContext);

  return Login > 0 ? <Item /> : <Home />;
};

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manager" element={<PrivateRoute Item={Manager} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<h1>INFORMAÇÕES</h1>} />
      </Routes>
    </>
  );
};
export default App;
