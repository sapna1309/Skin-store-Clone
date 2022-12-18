import {Route, Routes} from "react-router-dom";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductPage from "../Pages/ProductsPage";
import SingleProduct from "../Pages/SingleProductPage";
export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/products" element={<ProductPage />} ></Route>
            <Route path="/products/:id" element={<SingleProduct />} ></Route>
            <Route path="/cart" element={<CartPage/>} ></Route>
            <Route path="/checkout" element={<CheckoutPage/>} ></Route>
        </Routes>
        </>
    )
}