import ReactDom from "react-dom/client"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";


//Auth

// Restricted
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

import Home from "./pages/Home.jsx";
import AllMovies from "./pages/Movies/AllMovies.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


    </Route>
  )
)

ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
       <RouterProvider router={router} />
  </Provider>
)
