import Modal from "../components/Modal.jsx";
import classes from "../cssModules/DeleteCurrency.module.css";
import { Form, Link} from "react-router-dom";

import { useSelector } from "react-redux";

function DeleteCurrency() {
  const currencies = useSelector((state) => state.currencies.value);  


  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <label htmlFor='name'>Exchange Currency</label>
        <select 
          className={classes.inputContainer} 
          name='deletedCurrency' 
          id="deleteCurrency"
        >
          {(currencies || []).map((object) => (
            <option 
              key={`${object.baseCurrency}-${object.targetCurrency}`} 
              value={object.baseCurrency}
            >
              {object.baseCurrency + " -> " + object.targetCurrency + ` (${object.rate})`}
            </option>
          ))}
        </select>
        
        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>Delete</button>
        </div>

      </Form>
    </Modal>
  )
}

export default DeleteCurrency