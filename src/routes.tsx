import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Products from "./pages/product/products";
import Product from "./pages/product/product";
import CheckOut from "./pages/checkout/checkout";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        //   loader: rootLoader,
        children: [
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
    },
]);