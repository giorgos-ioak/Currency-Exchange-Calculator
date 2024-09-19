import Navbar from "../components/Navbar.jsx";
import Calculator from "../components/Calculator.jsx";

import classes from "../cssModules/MainPage.module.css";

function MainPage() {
  return (
    <>
      <Navbar />
      <h1>
        <span className={classes.span}>your</span>  Currency <br/> Converter
      </h1>
      <Calculator />
    </>
  )
}

export default MainPage