import classes from './Login.module.css';
import Navbar from './Navbar';

function Login() {
  return (
    <main className={classes.login}>
      <Navbar />
      <form className={classes.form}>
        <div className={classes.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>

        <div className={classes.row}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
