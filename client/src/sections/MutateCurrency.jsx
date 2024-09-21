import classes from "../cssModules/MutateCurrency.module.css";

import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

function MutateCurrency() {
  return (
    <div className={classes.mainContainer}>
      <Link to="/createCurrencyExchange">
        <Button to="newCurrency">Create Currency Exchange</Button>
      </Link>

      <Link to="/deleteCurrencyExchange">       
        <Button>Delete Currency Exchange</Button>
      </Link>

    </div>
  )
}

export default MutateCurrency