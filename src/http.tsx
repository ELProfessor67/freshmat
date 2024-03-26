import axios from "axios";

const api = axios.create({
    baseURL:   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})


export const getCategories = async () => await api.get('/categories');
export const getProduct = async () => await api.get('/products');
export const getSingleProduct = async (slug:string) => await api.get(`/product/${slug}`);
export const addProduct = async (formData:any) => await api.post('/product/add',formData,{
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});
export const addcategoty = async (formData:any) => await api.post('/category/add',formData,{
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});