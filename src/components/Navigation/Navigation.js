import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../Usermenu/Usermenu';
import { Log, NAV } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NAV>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <>
            <UserMenu />
            <NavLink to="/contacts">Contacts</NavLink>
          </>
        ) : (
          <Log>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </Log>
        )}
        {}
      </NAV>
    </>
  );
};

export default Navigation;
