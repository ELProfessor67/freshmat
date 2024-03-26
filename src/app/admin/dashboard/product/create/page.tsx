"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MdAlternateEmail, MdAudiotrack, MdKey } from 'react-icons/md'
import Link from 'next/link'
import { MdOutlineSubtitles, MdDescription, MdPhoto } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { addProduct, getCategories } from '@/http';
import { toast } from 'react-toastify';
import { ICRes, IMRes, Icategory } from '@/types';



const page = () => {
    const [name,setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [sdescription, setSDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [slug, setSlug] = useState<string>('');
    const [file, setFile] = useState<File[]>([]);
    const [filePrev, setFilePrev] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [allCategory, setAllCategory] = useState<Icategory[]>([])

    console.log(filePrev)

    const formRef = useRef<HTMLFormElement | null>(null);
   


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files:FileList | null = e.target.files;
       
        
        if(files){
            for (let key in files) {
                const file:File = files[key];
                const reader = new FileReader();
                reader.onload = () => {
                    if(reader.readyState == 2){
                        setFilePrev(prev => [...prev,(reader.result as string)]);
                        setFile(prev => [...prev,file]);
                    }
                }
                reader.readAsDataURL(file);
            }
        }
    }




    const submitHandler = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        try {
            const formData = new FormData();
            
            formData.append('name',name);
            formData.append('description',description);
            formData.append('shortdescription',sdescription);
            formData.append('category',category);
            formData.append('quantity',quantity.toString());
            formData.append('price',price.toString());
            formData.append('slug',slug);

            for (let index:number = 0; index < file.length; index++) {
                const element = file[index];
                formData.append('files',element);
            }
            

            const res:AxiosResponse<IMRes> = await addProduct(formData);
            toast.success(res.data.message);
            setName('');
            setDescription('');
            setSDescription('');
            setQuantity(0);
            setPrice(0);
            setCategory('');
            setFile([]);
            setFilePrev([]);
            formRef.current?.reset();

        } catch (error: any) {
            toast.success(error?.response?.data?.message);
        }
        setLoading(false);

    }


    //get all category
    useEffect(() => {
        (
            async function(){
                const res:AxiosResponse<ICRes<Icategory>> = await getCategories();
                setAllCategory(res.data.categories);
            }
        )()
    },[])

    return (
        <section className="sign_in pt_120 xs_pt_80" ref={formRef}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 wow fadeInRight">
                            <div className="sign_in_form">
                                <h3>Add Product</h3>
                                <form onSubmit={submitHandler }>
                                    <input type="text"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    <input type="text"  placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                                    <input type="text"  placeholder="Short Description"  value={sdescription} onChange={(e) => setSDescription(e.target.value)}/>
                                    <input type="number"  placeholder="Price"  value={+price} onChange={(e) => setPrice(+e.target.value)}/>
                                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option>Select Categoty</option>
                                        {
                                            allCategory.map(data => (
                                                <option value={data.name}>{data.name}</option>
                                            ))
                                        }
                                    </select>
                                    <input type="number"  placeholder="Quantity" value={+quantity} onChange={(e) => setQuantity(+e.target.value)}/>
                                    <input type="text"  placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)}/>
                                    <input type="file"  placeholder="Images" multiple onChange={handleFileChange}/>
                                    
                                    <div className='!flex !justify-center !items-center !gap-3 !w-full !overflow-x-auto'>
                                        {
                                            filePrev.map((url:string) => (
                                                <img src={url} alt='' key={url} className='!w-36 !h-28 !rounded-md'/>
                                            ))
                                        }
                                    </div>
                                    
                                    <button type="submit" className="common_btn" disabled={loading}>{loading ? "Loading...": "Create Now"}<span></span></button>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default page