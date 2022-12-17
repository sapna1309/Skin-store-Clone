import {Route, Routes} from "react-router-dom";
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
        </Routes>
        </>
    )
}