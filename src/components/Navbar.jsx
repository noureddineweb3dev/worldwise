import { NavLink } from 'react-router-dom';
import classes from '../components/Navbar.module.css';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <Logo />
      <ul>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/login" className={classes.ctaLink}>
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
