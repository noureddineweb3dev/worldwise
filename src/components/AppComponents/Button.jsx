import classes from './Button.module.css';

function Button({ btnType, children, onClick, state }) {
  return (
    <button className={`${classes.btn} ${classes[btnType]}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
