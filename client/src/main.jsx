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
import CreateCurrency from './routes/CreateCurrency.jsx';
import DeleteCurrency from './routes/DeleteCurrency.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: loader,
    children: [
      {
        path: "createCurrencyExchange",
        element: <CreateCurrency />,
      },
      {
        path: "deleteCurrencyExchange",
        element: <DeleteCurrency />
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
