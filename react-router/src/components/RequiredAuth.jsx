import { Navigate } from "react-router-dom";

export default function RequiredAuth({ children }) {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    return <Navigate to="/auth/login" />;
  }
  return <div>
    {children}
  </div>;
}
