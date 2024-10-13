import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {
  isAuthenticated: boolean;
}

const PrivateRouter: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  console.log("is auth:" + isAuthenticated)
  //const isAuthenticated = false
  return (isAuthenticated ? <Outlet /> : <Navigate to="/" />);
}

export default PrivateRouter;

