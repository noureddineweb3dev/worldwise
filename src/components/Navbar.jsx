import { NavLink } from 'react-router-dom';
import classes from '../components/Navbar.module.css';

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <div className={classes.logo}>
            <span>WW</span>
            <h1>WorldWise</h1>
          </div>
        </NavLink>
        <div className={classes.menu}>
          <NavLink to="product">Product</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="login">
            <button>Login</button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
