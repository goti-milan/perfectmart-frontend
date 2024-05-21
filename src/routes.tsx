import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Products from "./pages/product/products";
import Product from "./pages/product/product";
import CheckOut from "./pages/checkout/checkout";
import Home from "./pages/CustomerMain/homepage";
import Dashboard from "./pages/admin/dashboard";



const userRouter = [{
    path: "/",
    element: <Root />,
    //   loader: rootLoader,
    children: [
        {
            path: "",
            element: <Home />,
        },
        {
            path: "Products",
            element: <Products />,
        },
        {
            path: "Products/:id",
            element: <Product />,
        },
        {
            path: "Checkout",
            element: <CheckOut />,
        },
    ],
}]

const adminRouter = [{
    path: "/",
    element: <Root />,
    //   loader: rootLoader,
    children: [
        {
            path: "",
            element: <Dashboard />,
        },
        {
            path: "Products",
            element: <Products />,
        },
        {
            path: "Products/:id",
            element: <Product />,
        },

    ],
}]



export const router = createBrowserRouter(
  true ?  adminRouter : userRouter
);

