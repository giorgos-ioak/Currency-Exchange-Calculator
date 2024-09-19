import classes from "../cssModules/Button.module.css";

function Button({children}) {
  return (
    <button className={classes.button}>
      {children}
    </button>
  )
}

export default Button