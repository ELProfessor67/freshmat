"use client"
import { clearMessage, clearError } from '@/redux/ActionType';
import React, { useLayoutEffect,ReactNode } from 'react'

import { toast } from 'react-toastify';
import {useAppSelector,useAppDispatch} from '@/redux';

interface props {
    children: ReactNode
}

const MessageProvider = ({ children }:props) => {
    const {message,error} = useAppSelector(store => store.user);
    const dispatch = useAppDispatch();


    useLayoutEffect(() => {
        console.info(error,message)
        if(error){
            toast.success(error);
            alert(error)
            dispatch({...clearError})
        }

        if(message){
            toast.success(message);
            dispatch({...clearMessage})
        }
    },[message,error])
    return (<>
        {children}
    </>)
}

export default MessageProvider