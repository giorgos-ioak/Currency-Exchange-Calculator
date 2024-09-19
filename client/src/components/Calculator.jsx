import classes from "../cssModules/Calculator.module.css";

import InputNumber from "./InputNumber.jsx";
import { Form } from "react-router-dom";

function Calculator() {       // LATER ADD FORM COMPONENT
  return (
    <section className={classes.mainContainer}>
      <Form>
        <div className={classes.formContainer}>
          <div className={classes.firstColumn}>
            <InputNumber title="From" type="text" defaultValue="EUR"/>
            <InputNumber title="Exchange Rate" type="number" defaultValue={0.89}/>
            <InputNumber title="Amount" type="number" defaultValue={2.55}/>
          </div>

          <div className={classes.secondColumn}>
            <div className={classes.secondColumnContainer}>
              <InputNumber title="To" type="text" defaultValue="USD"/>
              <InputNumber title="Exchange Rate" type="number" defaultValue={0.89}/>
            </div>
            <button className={classes.btn}>Convert</button>
          </div>
        </div>
      </Form>

      <div className={classes.resultContainer}>
        <InputNumber type="text" defaultValue="This is your result"/>
      </div>
    </section>
  )
}

export default Calculator