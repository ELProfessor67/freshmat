import Sidebar from '@/components/layoutes/Sidebar'
import AdminProtectedRoute from '@/providers/AdminProtectRoute'
import React, { FC, ReactNode } from 'react'

interface props {
    children: ReactNode
}

const layout:FC<props> = ({children}) => {
  return (
    <AdminProtectedRoute>
        <div className='flex'>
            <Sidebar />
            <div className='p-5 flex-1 h-screen overflow-y-auto'>
            {children}
            </div>
        </div>
    </AdminProtectedRoute>
  )
}

export default layout