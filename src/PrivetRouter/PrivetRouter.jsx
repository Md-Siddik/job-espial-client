import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRouter;