import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from './PrivateRoutes';
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:"/signup",
          element: <SignUp></SignUp>
        },
        {
          path:"book/:id",
          element:<PrivateRoutes><BookService></BookService></PrivateRoutes>,
          loader:({params}) => fetch(`https://car-genius-server-omega.vercel.app/servicing/${params.id}`)
        },
         
        {
          path: 'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
        },
      ]
    },
  ]);

  export default router;