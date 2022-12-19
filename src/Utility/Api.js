
import axios from "axios";

//https://tvacha-mock-server.onrender.com/products

export const getData=(page)=>{
return axios.get(`https://tvacha-mock-server.onrender.com/products?_page=${page}&_limit=15`);
}

// export const getTodos=(params={})=>{
//     return axios.get(`https://tvacha-mock-server.onrender.com/products`,{
//         params:{
//             _page:params.page,
//             _limit:params.limit,
//             _sort:params.sort,
//             _order:params.order
//         }
//     });
// };

export const getSingleData=(id)=>{
    return axios({
        method:"get",
        baseURL:`https://tvacha-mock-server.onrender.com/products`,
        url:`/${id}`
    });

}

export const deleteProduct=(id)=>{
    return axios({
        method:"delete",
        baseURL:`https://tvacha-mock-server.onrender.com/products`,
        url:`/${id}`
    });
}
