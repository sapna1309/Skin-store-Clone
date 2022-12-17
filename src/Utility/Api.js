import axios from "axios";

//https://tvacha-mock-server.onrender.com/products

export const getData=()=>{
return axios.get(`https://tvacha-mock-server.onrender.com/products`);
}