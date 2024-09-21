import Modal from "../components/Modal.jsx";
import classes from "../cssModules/CreateCurrency.module.css";
import { Form, Link} from "react-router-dom";

function CreateCurrency() {

  console.log("newCurrency got rendered");

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' name='name' required/>

        <label htmlFor='name'>Exchange Rate</label>
        <input type='number' id='rate' name='rate' required /> 

        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>Create</button>
        </div>

        <p style={{
          textAlign: 'center', 
          marginTop: '2rem', 
          fontFamily: 'Poppins', 
          fontSize: '0.8rem'
          }}>
            **Rate is relative to 1$ USD**
        </p>
      </Form>
    </Modal>
  )
}

export default CreateCurrency