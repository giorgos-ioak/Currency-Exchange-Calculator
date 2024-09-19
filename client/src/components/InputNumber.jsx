import classes from "../cssModules/Input.module.css";

function InputNumber({title, type, defaultValue}) {
  return (
    <div className={classes.container}>
      <label className={classes.label}>{title ? title : ""}</label>
      <input 
        className={classes.input} 
        type={type}
        required
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default InputNumber