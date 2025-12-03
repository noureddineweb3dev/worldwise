import BackButton from './BackButton';
import Button from './Button';
import classes from './Form.module.css';
function Form() {
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" />
      </div>

      <div className={classes.row}>
        <label htmlFor="date">When did you go to ?</label>
        <input id="date" />
      </div>

      <div className={classes.row}>
        <label htmlFor="notes">Notes about your trip to </label>
        <textarea id="notes" />
      </div>

      <div className={classes.buttons}>
        <Button btnType="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}
export default Form;
