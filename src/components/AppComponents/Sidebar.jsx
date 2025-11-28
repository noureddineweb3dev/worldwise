import { Outlet } from 'react-router-dom';
import Logo from '../Logo';
import AppNav from './AppNav';
import Footer from './Footer';
import classes from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
