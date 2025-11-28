import Sidebar from '../components/AppComponents/Sidebar';
import Map from '../components/AppComponents/Map';
import classes from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={classes.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
