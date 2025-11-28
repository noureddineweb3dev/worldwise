import Logo from '../Logo';
import AppNav from './AppNav';
import Footer from './Footer';
import classes from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
