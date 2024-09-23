import classes from '../cssModules/Navbar.module.css';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';
// import { login } from "../stateReducers/authSlice.js";

import Button from "./Button.jsx";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const dispatch = useDispatch();

 
  return (
    <section className={classes.section}>
      <div className={classes.leftContainer}>
        {/* <Logo /> */}
      </div>
      
      <div className={classes.rightContainer}>
        {!isLoggedIn ? 
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
            :
          <Link to="/logout">
            <Button>Log Out</Button>
          </Link>
        }
      </div>
    </section>
  )
}

export default Navbar;