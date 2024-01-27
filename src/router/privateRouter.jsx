import AuthService from "../services/authService";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children }) => {
    const isAuthenticated = AuthService();
    return isAuthenticated.isAuthenticated() ? children : <Navigate to="/"/>
  };

export default PrivateRoute;