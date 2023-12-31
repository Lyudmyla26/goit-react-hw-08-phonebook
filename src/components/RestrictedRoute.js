import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
