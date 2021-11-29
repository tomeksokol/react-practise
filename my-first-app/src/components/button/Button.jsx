import styles from "./Button.module.css";

const Button = ({ type = "button", label, disabled, sendEventData }) => {
  // const btnClasses = [styles.button];

  //second way

  //const btnClasses = `${styles.button} ${disabled ? styles.disabled : ""}`;
  //remove if and join
  //third way

  const btnClasses = [styles.button, disabled ? styles.disabled : ""].join(" ");
  //remove if and join

  // if (disabled) {
  //   btnClasses.push(styles.disabled);
  // }

  return (
    <button
      onClick={sendEventData}
      className={btnClasses}
      type={type}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
