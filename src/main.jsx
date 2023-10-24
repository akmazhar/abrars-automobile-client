import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './MainLayout/MainLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/LOGIN.JSX';
import Register from './Pages/Register/Register';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Bmw from './Pages/CarBrand/Bmw';
import Toyota from './Pages/CarBrand/Toyota';
import Tesla from './Pages/CarBrand/Tesla';
import Mercedes from './Pages/CarBrand/Mercedes';
import Ford from './Pages/CarBrand/Ford';
import Honda from './Pages/CarBrand/Honda';
import FrontBrand from './Pages/FrontBrand/FrontBrand';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './Router/PrivetRoute';



const router = createBrowserRouter([
{
  path : "/",
  element : <MainLayout></MainLayout>,
  errorElement : <ErrorPage></ErrorPage>,
  children : [
{
    path : "/",
    element : <Home></Home>,
},

{
    path: "/addProduct",
    element: <PrivetRoute><AddProduct></AddProduct> </PrivetRoute> 
},
{
   path:"/updateProduct/:id",
   element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
   loader: ({params}) => fetch(`http://localhost:5001/product/${params.id}`) 
},
{
    path: "/myCart",
    element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
    loader: () => fetch('http://localhost:5001/brandCarts')
},

{
  path: "/frontBrand",
  element: <FrontBrand></FrontBrand>,
},

{
  path: "/register",
  element: <Register></Register>
},

{
  path: "/login",
  element: <Login></Login>
},
{
  path: "/bmw",
  element: <Bmw></Bmw>,
  loader: () => fetch('http://localhost:5001/car/BMW')
},
{
  path: "/mercedes",
  element: <Mercedes></Mercedes>,
  loader: () => fetch('http://localhost:5001/car/MERCEDES-BENZ')
},
{
  path: "/tesla",
  element: <Tesla></Tesla>,
  loader: () => fetch('http://localhost:5001/car/TESLA')
},
{
  path: "/toyota",
  element: <Toyota></Toyota>,
  loader: () => fetch('http://localhost:5001/car/TOYOTA')
},
{
  path: "/honda",
  element: <Honda></Honda>,
  loader: () => fetch('http://localhost:5001/car/HONDA')
},
{
  path: "/ford",
  element: <Ford></Ford>,
  loader: () => fetch('http://localhost:5001/car/FORD')
},
{
  path : "/productDetails/:id",
 element : <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
 loader: ({params}) => fetch(`http://localhost:5001/product/${params.id}`)
}

// {
//     path : "/carDetails/:id",
//     element : <CarDetails></CarDetails>,
//     loader: () => fetch('http://localhost:5001//car')
// }
  ]
}
]);


export default router;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
 <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)



