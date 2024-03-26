"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MdAlternateEmail, MdAudiotrack, MdKey } from 'react-icons/md'
import Link from 'next/link'
import { MdOutlineSubtitles, MdDescription, MdPhoto } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { addProduct, addcategoty, getCategories } from '@/http';
import { toast } from 'react-toastify';
import { ICRes, IMRes, Icategory } from '@/types';



const page = () => {
    const [name,setName] = useState<string>('');

    const [file, setFile] = useState<File | null>(null);
    const [filePrev, setFilePrev] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);



    const formRef = useRef<HTMLFormElement | null>(null);
   


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files:FileList | null = e.target.files;
        if(files){
            const file:File = files[0];
            const reader = new FileReader();
            reader.onload = () => {
            if(reader.readyState == 2){
                setFilePrev(reader.result as string);
                    setFile(file);
                }
            }
            reader.readAsDataURL(file);
        }
        
    }
    




    const submitHandler = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        try {
            const formData = new FormData();
            
            formData.append('name',name);
            
            if(file){
                formData.append('files',file);
            }
     
            

            const res:AxiosResponse<IMRes> = await addcategoty(formData);
            toast.success(res.data.message);
            setName('');
            setFile(null);
            setFilePrev('');
            formRef.current?.reset();

        } catch (error: any) {
            toast.success(error?.response?.data?.message);
        }
        setLoading(false);

    }

    return (
        <section className="sign_in pt_120 xs_pt_80" ref={formRef}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 wow fadeInRight">
                            <div className="sign_in_form">
                                <h3>Add Product</h3>
                                <form onSubmit={submitHandler }>
                                    <input type="text"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    <input type="file"  placeholder="Images" multiple onChange={handleFileChange}/>
                                    
                                    <div className='!flex !justify-center !items-center !gap-3 !w-full !overflow-x-auto'>
                                        {
                                            filePrev && (
                                                <img src={filePrev} alt='' key={filePrev} className='!w-36 !h-28 !rounded-md'/>
                                            )
                                        }
                                    </div>
                                    
                                    <button type="submit" className="common_btn">Create Now<span></span></button>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default page