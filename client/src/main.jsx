import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { loader } from "./routes/MainPage.jsx";
import "./index.css";

import MainPage from './routes/MainPage.jsx';
import Login from './routes/Login.jsx';
import Logout from './routes/Logout.jsx';
import CreateCurrency, { action as createAction } from './routes/CreateCurrency.jsx';
import DeleteCurrency, { action as deleteAction } from './routes/DeleteCurrency.jsx';
import EditCurrency, { action as editAction } from './routes/EditCurrency.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: loader,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "createCurrencyExchange",
        element: <CreateCurrency />,
        action: createAction
      },
      {
        path: "deleteCurrencyExchange",
        element: <DeleteCurrency />,
        action: deleteAction
      },
      {
        path: "editCurrencyExchange",
        element: <EditCurrency />,
        action: editAction
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
