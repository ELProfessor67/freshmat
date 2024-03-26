"use client"
import { useAppDispatch, useAppSelector } from '@/redux'
import { loadme } from '@/redux/actions/user'
import { UserType } from '@/types'
import { redirect, usePathname } from 'next/navigation'
import React, { FC, ReactNode, useEffect, useLayoutEffect } from 'react'

interface props {
    children: ReactNode
}

// interface UserType {
//   name: string,
//   email: string,
//   address: string[],
//   role: "admin" | "user"
// }


interface AppSelectorReturnType {
  isAuth: boolean | undefined;
  user: UserType | null;
}

const AdminProtectedRoute:FC<props> = ({children}) => {
  const {isAuth,user}:AppSelectorReturnType = useAppSelector(store => store.user);
    const pathname = usePathname();
    useLayoutEffect(() => {
        if(user != null){
            if(pathname.includes('/admin')){
                if(user?.role != 'admin'){
                    redirect('/');
                }
            }
        }    
    },[isAuth,pathname,user])


    const dispatch = useAppDispatch();
    useEffect(()=> {
      (async function (params) {
        const res = await dispatch(loadme());
        if(!res){
          redirect('/');
        }
      })(); 
    },[])
  return (children)
}

export default AdminProtectedRoute