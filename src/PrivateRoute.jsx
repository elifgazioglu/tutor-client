import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { Context } from "./context/Context";

export default function PrivateRoute(props) {
  const { user, isLoading } = useContext(Context);
  const { children } = props;
  if (isLoading) {
    return <div>mal manitam</div>;
  }
  if (user) {
    return children;
  }
  //redirect if there is no user
  return <Navigate to="/login" />;
}
