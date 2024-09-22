import Modal from "../components/Modal.jsx";
import classes from "../cssModules/CreateCurrency.module.css";
import { Form, Link, redirect} from "react-router-dom";

function CreateCurrency() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <label htmlFor='name'>From</label>
        <input type="text" id='baseCurrency' name='baseCurrency' required/>

        <label htmlFor='name'>To</label>
        <input type="text" id='targetCurrency' name='targetCurrency' required/>

        <label htmlFor='name'>Exchange Rate</label>
        <input type='number' step='0.01' id='rate' name='rate' required /> 

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




export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:3000/createCurrency', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    if(!response.ok) {
      throw new Error({
        name: 'Error',
        message: 'Failed to create Currency Exchange.'
      });
    } 

    return redirect('/');
} catch (error) {
  return { error: error.message };
}
};