import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";


interface PrivateRouteProps {
    children : ReactNode
} 


const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

    const auth = useAuth();
    const location = useLocation();

    if(!auth){
        return
    }

    const { user, loading } = auth;

    if(loading){
        return <div className="w-8 mx-auto md:my-64 my-56 lg:my-72"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
   
};

export default PrivateRoute;