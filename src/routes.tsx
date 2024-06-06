import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Products from "./pages/product/products";
import Product from "./pages/product/product";
import CheckOut from "./pages/checkout/checkout";
import Home from "./pages/CustomerMain/homepage";
import Dashboard from "./pages/admin/dashboard";
import Profile from "./pages/profile/userProfile";
import Setting from "./pages/profile/customerSetting/setting";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";
import ForgetPassword from "./pages/auth/forgetPassword";
import ResetPassword from "./pages/auth/resetPassword";
import Wishlist from "./pages/whishlist/whishlist";
import ContactUs from "./pages/contactUs/contactUs";
import FAQPage from "./pages/faq/faq";



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
        {
            path: "profile",
            element: <Profile />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "forgot-password",
            element: <ForgetPassword />,
        },
        {
            path: "reset-password",
            element: <ResetPassword />,
        },
        {
            path: "whishlist",
            element: <Wishlist />,
        },
        {
            path: "contact-us",
            element: <ContactUs />,
        },
        {
            path: "faq",
            element: <FAQPage />,
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
        {
            path: "profile",
            element: <Setting />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "forgot-password",
            element: <ForgetPassword />,
        },
        {
            path: "reset-password",
            element: <ResetPassword />,
        },
        {
            path: "whishlist",
            element: <Wishlist />,
        },
        {
            path: "contact-us",
            element: <ContactUs />,
        },
        {
            path: "faq",
            element: <FAQPage />,
        },

    ],
}]



export const router = createBrowserRouter(
  true ?  adminRouter : userRouter
);

