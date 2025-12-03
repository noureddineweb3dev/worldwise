import classes from './Message.module.css';
function Message({ message }) {
  return (
    <p className={classes.message}>
      <span>👋{message}</span>
    </p>
  );
}
export default Message;
