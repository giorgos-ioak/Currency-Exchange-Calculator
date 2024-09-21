import Modal from "../components/Modal.jsx";
import classes from "../cssModules/CreateCurrency.module.css";
import { Form, Link} from "react-router-dom";

function CreateCurrency() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <label htmlFor='name'>From</label>
        <input type="text" id='baseCurrency' name='baseCurrency' required/>

        <label htmlFor='name'>To</label>
        <input type="text" id='targetCurrency' name='targetCurrency' required/>

        <label htmlFor='name'>Exchange Rate</label>
        <input type='number' id='rate' name='rate' required /> 

        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>Create</button>
        </div>
      </Form>
    </Modal>
  )
}

export default CreateCurrency