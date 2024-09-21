import { useNavigate } from 'react-router-dom';
import classes from "../cssModules/Modal.module.css";


function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  };

  console.log("Modal got rendered");

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal;