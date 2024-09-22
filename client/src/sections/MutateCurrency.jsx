import classes from "../cssModules/MutateCurrency.module.css";

import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

function MutateCurrency() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.topContainer}>
        <Link to="/createCurrencyExchange">
          <Button to="newCurrency">Create Currency</Button>
        </Link>

        <Link to="/deleteCurrencyExchange">       
          <Button>Delete Currency</Button>
        </Link>
      </div>


      <div className={classes.bottomContainer}>
        <Link to="/editCurrencyExchange">       
          <Button>Edit Currency</Button>
        </Link>
      </div>
    </div>
  )
}

export default MutateCurrency