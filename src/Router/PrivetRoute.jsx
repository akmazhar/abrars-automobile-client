import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return <span className="loading loading-spinner text-accent"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate 
  state={location.pathname}
  
  to="/login" />;
};

export default PrivetRoute;