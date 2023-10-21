
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvaider/AuthProvaider";


const PrivateRoute2 = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
// const {user, loading} = useContext(AuthContext);
const {user, loading} = useContext(AuthContext);

  const location = useLocation();


  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg ml-96 my-60"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute2;

