import classes from '../cssModules/Navbar.module.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import Button from "./Button.jsx";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authToken = localStorage.getItem('authToken');

  
  return (
    <section className={classes.section}>
      <div className={classes.leftContainer}>
        {/* <Logo /> */}
      </div>
      
      <div className={classes.rightContainer}>
        {!isLoggedIn && !authToken ? 
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
