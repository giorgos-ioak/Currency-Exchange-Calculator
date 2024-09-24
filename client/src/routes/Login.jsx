import classes from "../cssModules/Login.module.css";
import Modal from "../components/Modal.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../stateReducers/authSlice.js';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if(!response.ok) {
        throw new Error({
          name: 'Error',
          message: 'Failed to Log In.'
        });
      } 

      const result = await response.json();

      if (result.token) {
        // STORING THE TOKEN IN THE LOCAL STORAGE
        localStorage.setItem('authToken', result.token);
  
        dispatch(login());
        navigate('/');

      } else {
        throw new Error('Token not found in response.');
      }
    } catch(err) {
      return {error: err.message};
    }
  }

  return (
    <Modal>
      <form method='post' onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' name='username' required/>

        <label htmlFor='password'>Password</label>
        <input type="password" id='password' name='password' required/>

        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>LogIn</button>
        </div>
      </form>
    </Modal>
  )
}

export default Login;


