"use client"
import React, { FC, ReactNode, useEffect } from 'react'
import {loadme} from '@/redux/actions/user';
import { useAppDispatch } from '@/redux';

interface Props
{
  children: ReactNode
}

const UserProvider:FC<Props> = ({children}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadme());
    },[])
  return (children)
}

export default UserProvider