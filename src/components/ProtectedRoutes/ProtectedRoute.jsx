import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin") === "true";
  return isLogin ? children : <Navigate to="/Login" replace />;
};

export default ProtectedRoute;