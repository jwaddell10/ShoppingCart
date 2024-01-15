import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Home.jsx'
import { Shopping } from './Shopping.jsx'
import Cart from './Cart.jsx'

const Router = () => {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
   
    {
      path: "/shopping",
      element: <Shopping />,
      //maybe have children here? like for filters to more specific sets of items
    },
    {
      path: "/cart",
      element: <Cart />
    },
  ]);

  return <RouterProvider router={router} />;

}

  export default Router;