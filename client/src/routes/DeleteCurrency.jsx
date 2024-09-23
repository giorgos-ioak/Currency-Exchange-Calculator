import Modal from "../components/Modal.jsx";
import classes from "../cssModules/DeleteCurrency.module.css";
import { Form, Link, redirect} from "react-router-dom";

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
              value={JSON.stringify({
                baseCurrency: object.baseCurrency,
                targetCurrency: object.targetCurrency
              })}
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




export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const selectedCurrency = JSON.parse(data.deletedCurrency);

    const response = await fetch('http://localhost:3000/deleteCurrency', {
      method: 'DELETE',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(selectedCurrency)
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






