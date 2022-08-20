import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";

import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feed" element={<Feed />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
