import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.
        <br />
        We can't display data.
        <br />
        Come back when light side defeats dark the dark one.
      </p>
    </>
  );
};
export default ErrorMessage;
