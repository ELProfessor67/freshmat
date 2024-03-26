'use client';
import { useAppDispatch } from '@/redux';
import { login } from '@/redux/actions/user';
import React, { FC, useState } from 'react'

const page: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);
        dispatch(login(formData));
    }

    const handleGoogleLogin = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/googlelogin`,"_self");
    }
    return (
        <>
            <section className="page_breadcrumb" style={{ background: 'url(/images/breadcrumb_bg.jpg)' }}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>Sign In</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">Sign In</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sign_in pt_120 xs_pt_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-3 col-lg-4 d-none d-lg-block wow fadeInLeft">
                            <div className="sign_in_img">
                                <img src="/images/sign_in_img_1.jpg" alt="Sign In" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-xxl-5 col-md-10 col-lg-7 col-xl-6 wow fadeInRight">
                            <div className="sign_in_form">
                                <h3>Sign In Your Account 👋</h3>
                                <form onSubmit={handleSubmit}>
                                    <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <div className="forgot">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Remeber Me
                                            </label>
                                        </div>
                                        <a href="forgot_password">Forgot Password ?</a>
                                    </div>
                                    <button type="submit" className="common_btn">Sign In<span></span></button>
                                </form>

                                <p className="dont_account">Don’t have an account? <a href="sign_up">Sign Up</a></p>
                                <p className="or">or</p>
                                <ul>
                                    <li>
                                        <a  onClick={handleGoogleLogin}>
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