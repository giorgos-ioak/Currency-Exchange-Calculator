import classes from "../cssModules/AmountInput.module.css";

function AmountInput({title, name}) {
  return (
    <div className={classes.container}>
      <label className={classes.label}>{title ? title : ""}</label>
      <input 
        className={classes.inputContainer} 
        name={name}
        type="number"
        required
      />
    </div>
  )
}

export default AmountInput