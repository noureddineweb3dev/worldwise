import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/AppComponents/Sidebar';
import Map from '../components/AppComponents/Map';
import classes from './AppLayout.module.css';

function AppLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className={classes.app}>
      <Sidebar />
      <Map />
      <div className={classes.userPanel}>
        <span className={classes.userEmail}>Logged in as: {user?.email}</span>
        <button onClick={handleLogout} className={classes.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AppLayout;
