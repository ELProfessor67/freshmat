import axios from "axios";
import { access } from "fs";
import { userLoginFai, userLoginReq, userLoginSuc, userRegisterFai, userRegisterReq, userRegisterSuc, userLoadReq, userLoadSuc, userLoadFai } from "../ActionType";
import { AppDispatch } from "..";


const api = axios.create({
    baseURL:   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})



export const login = (formData:any ) => async (dispatch:any) => {
    try {
        dispatch({
            ...userLoginReq,
        })
        
        const {data} = await api.post('/login',formData);
        dispatch({
            ...userLoginSuc,
            payload: {...data}
        })
        console.log(data)
    } catch (error:any) {
       
        dispatch({
            ...userLoginFai,
            payload: {
                message: error?.response?.data?.message
            }
        })
    }
}


export const register = (formData:any) => async (dispatch:any) => {
    try {
        dispatch({
            ...userRegisterReq,
        })

        const {data} = await api.post('/register',formData);
        dispatch({
            ...userRegisterSuc,
            payload: {...data}
        })
    } catch (error:any) {
        dispatch({
            ...userRegisterFai,
            message: error?.response?.data?.message
        })
    }
}


export const loadme = () => async (dispatch:any) => {
    try {
        dispatch({
            ...userLoadReq
        })

        const {data} = await api.get('/me');
        console.info(data)
        dispatch({
            ...userLoadSuc,
            payload: {...data}
        })
        return true;
    } catch (error) {
        dispatch({
            ...userLoadFai
        })
        return false;
    }
}
