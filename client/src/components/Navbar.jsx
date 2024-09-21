import classes from '../cssModules/Navbar.module.css';

import Button from "./Button.jsx";

function Navbar() {
  return (
    <section className={classes.section}>
      <div className={classes.leftContainer}>
        {/* <Logo /> */}
      </div>
      
      <div className={classes.rightContainer}>
        <Button>Instructions</Button>
        <Button>About Us</Button>
      </div>
    </section>
  )
}

export default Navbar;