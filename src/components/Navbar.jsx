import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import classes from '../components/Navbar.module.css';
import Logo from './Logo';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className={classes.nav}>
      <Logo />
      <ul>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        {isAuthenticated ? (
          <>
            <span className={classes.userEmail}>{user?.email}</span>
            <button onClick={handleLogout} className={classes.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className={classes.ctaLink}>
            Login
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
