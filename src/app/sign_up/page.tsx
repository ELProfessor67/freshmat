'use client'
import { useAppDispatch } from '@/redux';
import { register } from '@/redux/actions/user';
import React, { FC, useState } from 'react'
import { toast } from 'react-toastify';

const page: FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [cpassword, setCpassword] = useState<string>('');

    const dispactch = useAppDispatch();


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password != cpassword){
            return toast.error("Password and Confirm Password does not match");
        }

        const formData  = new FormData();
        formData.append('name',name);
        formData.append('password',password);
        formData.append('email',email);

        dispactch(register(formData));
    }
    return (
        <>
            <section className="page_breadcrumb" style={{ background: 'url(/images/breadcrumb_bg.jpg)' }}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>Sign Up</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">Sign Up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="sign_up pt_120 xs_pt_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-3 col-lg-4 d-none d-lg-block wow fadeInLeft">
                            <div className="sign_in_img">
                                <img src="/images/sign_in_img_2.jpg" alt="Sign In" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-xxl-5 col-md-10 col-lg-7 col-xl-6 wow fadeInRight">
                            <div className="sign_in_form">
                                <h3>Sign Up to Continue 👋</h3>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <input type="password" placeholder="Confirm password" value={cpassword} onChange={(e) => setCpassword(e.target.value)}/>
                                    <button type="submit" className="common_btn">Sign Up<span></span></button>
                                </form>

                                <p className="dont_account">Already have an account? <a href="sign_in.html">Sign In</a></p>
                                <p className="or">or</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img src="/images/google_logo.png" alt="google" className="img-fluid w-100" />
                                            </span>
                                            Google
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img src="/images/fb_logo.png" alt="google" className="img-fluid w-100" />
                                            </span>
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img src="/images/twitter_logo.png" alt="google" className="img-fluid w-100" />
                                            </span>
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page