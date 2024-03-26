"use client"
import React, { memo, useCallback, useLayoutEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses, SubMenu } from 'react-pro-sidebar';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import Link from 'next/link';
import { AiFillInstagram } from "react-icons/ai";
import { MdSms, MdStarRate, MdDashboard, MdScanner } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { usePathname } from 'next/navigation';
import { MdQrCodeScanner } from "react-icons/md";
import { VscSymbolKeyword } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { SiGoogleadsense } from "react-icons/si";
import { useAppSelector } from '@/redux';
import { FaBasketShopping } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md"


type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const sidebarOpetion = {
    width: '18rem',
    backgroundColor: 'white',
    rootStyles: {
        display: 'flex',
        flexDirection: 'column' as FlexDirection,
        [`.${sidebarClasses.container}`]: {
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            transition: "box-shadow 0.3s ease"
        },
    }

}


const hoverActiveStyle = {
    backgroundColor: '#e0e7ff',
    color: '#4F46E4',
}
const menuItemStyles = {
    overflowY: 'auto',
    button: {
        [`&.active`]: hoverActiveStyle,
        [`&:hover`]: hoverActiveStyle,
    },
}

const MenuItemsData = [
    {
        name: 'Dashboard',
        icons: <MdDashboard size={25} color='#B0B0B0' />,
        href: '/admin/dashboard'
    },
    {
        label: "Products",
        icons: <FaBasketShopping size={25} color='#B0B0B0' />,
        menus: [
            {
                name: 'Add',
                icons: <IoIosAddCircle size={25} color='#B0B0B0' />,
                href: '/admin/dashboard/product/create'
            },
            {
                name: 'View Products',
                icons: <MdViewList size={25} color='#B0B0B0' />,
                href: '/admin/dashboard/product'
            },
        ]
    },
    {
        label: "Category",
        icons: <MdOutlineCategory size={25} color='#B0B0B0' />,
        menus: [
            {
                name: 'Add',
                icons: <IoIosAddCircle size={25} color='#B0B0B0' />,
                href: '/admin/dashboard/category/create'
            },
            {
                name: 'View Category',
                icons: <MdViewList size={25} color='#B0B0B0' />,
                href: '/admin/dashboard/category'
            },
        ]
    },
    {
        label: "Orders",
        icons: <FaBookmark size={25} color='#B0B0B0' />,
        menus: [
            {
                name: 'Order Processing',
                icons: <MdOutlinePendingActions size={25} color='#B0B0B0' />,
                href: '/admin/dashboard/order/processing'
            },
            {
                name: 'Complete Orders',
                icons: <MdViewList size={25} color='#B0B0B0' />,
                href: '/admin/dashboard/order/complete'
            },
        ]
    },

]


const SidebarComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const { isAuth, user } = useAppSelector(store => store.user);
    const pathname = usePathname();


    const handleCollapse = useCallback(() => {
        setExpanded(prev => !prev);
    }, []);



    useLayoutEffect(() => {
        if(pathname.includes("/admin")){
            const header = document.getElementById('header');
            const footer = document.getElementById('footer');
            if(header){
                header.style.display = 'none';
            }
            if(footer){
                footer.style.display = 'none';
            }
        }
    },[pathname]);




    return (
        <Sidebar collapsed={expanded} {...sidebarOpetion}>
            <div className='p-4 mb-2 pxg-3 flex justify-between items-center pr-2 border-b border-gray-100'>
                <div className={`flex-1 flex justify-center items-center ${expanded ? 'hidden' : 'flex'}`}>

                    {
                        user?.avatar
                            ? (<img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${user?.avatar}`} alt='avatar' width={200} height={200} className={`w-28 rounded-full ${expanded ? 'hidden w-0' : 'block'}`} />)
                            : (
                                <div className={`w-28 h-28 rounded-full bg-primary/10 grid place-items-center ${expanded ? 'hidden w-0' : 'block'}`}>
                                    <h2 className='!text-primary text-5xl'>{user?.name[0].toUpperCase()}</h2>
                                </div>
                            )
                    }


                </div>

                <div className='toggler'>
                    <button onClick={handleCollapse} className='bg-none outline-none border-none p-2 bg-primary/10 rounded-full !text-primary'>
                        {expanded ? <IoIosArrowForward size={30} /> : <IoIosArrowBack size={30} />}
                    </button>
                </div>
            </div>
            <div className='flex-1 overflow-x-auto'>
                <Menu menuItemStyles={menuItemStyles}>
                    {
                        MenuItemsData.map(data => {
                            if(data.label != undefined){
                                return <SubMenu label={data.label} icon={data.icons}>
                                {
                                    data.menus.map(m => (
                                        <MenuItem  key={m.name} icon={m.icons} active={pathname === m.href}>
                                            <Link href={m.href} className='text-gray-600'>{m.name}</Link>
                                        </MenuItem>
                                    ))
                                }
                                </SubMenu>
                            }else{
                                return(
                                    <MenuItem  key={data.name} icon={data.icons} active={pathname === data.href}>
                                        <Link href={data.href} className='text-gray-600'>{data.name}</Link>
                                    </MenuItem>
                                )
                            }
                        })
                    }
                </Menu>
            </div>
        </Sidebar>
    )
}

export default memo(SidebarComponent);