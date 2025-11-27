import classes from './Login.module.css';
function Login() {
  return (
    <div className={classes.formContainer}>
      <form action="submit" className={classes.form}>
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" id="email" placeholder="jack@example.com" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="*******" />
        <button>LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
