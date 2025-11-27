import { NavLink } from 'react-router-dom';
import classes from '../components/Navbar.module.css';

function Navbar() {
  return (
    <header>
      <nav>
        <div className={classes.logo}>
          <span>WW</span>
          <h1>WorldWise</h1>
        </div>
        <div className={classes.menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="product">Product</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
