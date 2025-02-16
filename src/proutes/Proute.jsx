import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Features from "../components/Features";
import Login from "../components/Login";
import Pricing from "../components/Pricing";
import Resources from "../components/Resources";
import Signup from "../components/Signup";
import Basic from "../components/Basic";
import Professional from "../components/Professional";
import Master from "../components/Master";

function Proute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />}>
        <Route index path="basic" element={<Basic />} />
        <Route path="professional" element={<Professional />} />
        <Route path="master" element={<Master />} />
      </Route>
      <Route path="/resources" element={<Resources />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Proute;
