import Modal from "../components/Modal.jsx";
import classes from "../cssModules/DeleteCurrency.module.css";
import { Form, Link, redirect} from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function EditCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const currencies = useSelector((state) => state.currencies.value);  

  function handleSelectedCurrencyChange(e) {
    setSelectedCurrency(JSON.parse(e.target.value));
  };


  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <label htmlFor='editedCurrency'>Exchange Currency</label>
        <select 
          className={classes.inputContainer} 
          name='editedCurrency' 
          id="editedCurrency"
          onChange={handleSelectedCurrencyChange}
        >
          {(currencies || []).map((object) => (
            <option 
              key={`${object.baseCurrency}-${object.targetCurrency}`} 
              value={JSON.stringify({
                baseCurrency: object.baseCurrency,
                targetCurrency: object.targetCurrency,
                rate: object.rate
              })}
            >
              {object.baseCurrency + " -> " + object.targetCurrency + ` (${object.rate})`}
            </option>
          ))}
        </select>

        <label htmlFor='editedRate'>Rate</label>
        <input 
          type="number" 
          defaultValue={selectedCurrency?.rate} 
          step='0.01' 
          id='editedRate' 
          name='editedRate' 
          required
        />
        
        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>Edit</button>
        </div>

      </Form>
    </Modal>
  )
}

export default EditCurrency;






export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);   

    const selectedCurrency = JSON.parse(data.editedCurrency);
    const editedRate = data.editedRate;

    const updatedCurrency = {...selectedCurrency, rate: editedRate};

    const response = await fetch('http://localhost:3000/currencies', {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedCurrency)
    });

    if(!response.ok) {
      throw new Error({
        name: 'Error',
        message: 'Failed to update Currency Exchange.'
      });
    } 

    return redirect('/');
} catch (error) {
  return { error: error.message };
}
};
