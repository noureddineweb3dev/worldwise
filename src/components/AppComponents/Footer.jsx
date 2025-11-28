import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
