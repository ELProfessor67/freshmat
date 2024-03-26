"use client";
import { getCategories, getProduct } from '@/http';
import { ICRes, IPRes, IProduct, Icategory } from '@/types';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";



const page = () => {
    const [categories, setCategories] = useState<Icategory[]>([]);

    //get all products
    useEffect(() => {
        (
            async function(){
                const res:AxiosResponse<ICRes<Icategory>> = await getCategories();              
                setCategories(res.data.categories);
            }
        )()
    },[])
    return (
        <section className="cart_view pt_120 xs_pt_80">
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInLeft">
                        <div className="cart_table_area">
                            <div className="table-responsive">
                                <table>
                                    <thead className='!bg-primary/20'>
                                        <tr>
                                            <th className="images">ID</th>
                                            <th className="images">Image</th>
                                            <th className="name">Product Name</th>
                                            <th className="delete">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categories.map((data:Icategory) => (
                                                <tr>
                                                    <td className="price">
                                                        <p>${data._id}</p>
                                                    </td>
                                                    <td className="images">
                                                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`} alt="cart" className="img-fluid w-100" />
                                                    </td>
                                                    <td className="name">
                                                        <a className="title" href="#">{data.name}</a>
                                                    </td>
                                                    <td>
                                                        <div className="delete !inline">
                                                            <a className="del" href="#">
                                                                <MdDelete/>
                                                            </a>
                                                        </div>
                                                        <div className="delete !inline ml-5">
                                                            <a className="del hover:!text-primary" href="#">
                                                                <MdEdit/>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    
                                                </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page