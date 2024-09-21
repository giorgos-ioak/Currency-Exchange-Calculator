import classes from "../cssModules/MutateCurrency.module.css";

import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

function MutateCurrency() {
  return (
    <div className={classes.mainContainer}>
      <Link to="/createCurrency">
        <Button to="newCurrency">Create Currency</Button>
      </Link>

      <Link to="/deleteCurrency">       
        <Button>Delete Currency</Button>
      </Link>

    </div>
  )
}

export default MutateCurrency