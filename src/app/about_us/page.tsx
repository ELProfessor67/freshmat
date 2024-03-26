import Script from 'next/script'
import React, { FC } from 'react'

const page: FC = () => {
    return (
        <>

    {/* <!--=========================
        BREADCRUMB START
    ==========================-->  */}
            <section className="page_breadcrumb" style={{ background: 'url(/images/breadcrumb_bg.jpg)' }}>
                <div className="breadcrumb_overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_text wow fadeInUp">
                                    <h1>About Us</h1>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-home-lg"></i> Home</a></li>
                                        <li><a href="#">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--=========================
        BREADCRUMB START
    ==========================-->


    <!--=========================
        ABOUT PAGE  START
    ==========================--> */}
            <section className="about pt_120 xs_pt_80">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-md-8 col-lg-6 wow fadeInLeft">
                            <div className="about_img">
                                <div className="img">
                                    <img src="/images/about_img.jpg" alt="about" className="img-fluid w-100" />
                                </div>
                                <p>“There are many variations its of passages of Lorem Ipsum nsi available, but the majority
                                    they suffered” <span>Robart Day</span></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight">
                            <div className="about_text">
                                <div className="section_heading heading_left mb_20">
                                    <h4>About Us</h4>
                                    <h2>Welcome To Organic Agriculture Grocery Shop</h2>
                                </div>
                                {/* <!-- <h5>We connect buyers and sellers of natural, organic products who are so beguiled demoralized
                            charms of pleasure.</h5> --> */}
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or mori words which slightly
                                    believable.</p>
                                <ul>
                                    <li>
                                        <span>01</span>
                                        <h4> Organic products who are so</h4>
                                    </li>
                                    <li>
                                        <span>02</span>
                                        <h4>Healthy food everyday</h4>
                                    </li>
                                    <li>
                                        <span>03</span>
                                        <h4>Local growth of fresh food</h4>
                                    </li>
                                    <li>
                                        <span>04</span>
                                        <h4>Demoralized charms of pleasure</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why_choose mt_120 xs_mt_80 pt_115 xs_pt_75 pb_120 xs_pb_80"
                style={{ background: 'url(/images/why_choose_bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 m-auto">
                            <div className="section_heading mb_25 wow fadeInUp">
                                <h4>Our Features</h4>
                                <h2>Why Choose Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp">
                            <div className="why_choose_item">
                                <h2>
                                    <span>
                                        <img src="/images/why_choose_icon_1.png" alt="why choose" className="img-fluid w-100" />
                                    </span>
                                    All Kind Brand
                                </h2>
                                <p>There are many variations of passages of any Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or mori words....</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp">
                            <div className="why_choose_item">
                                <h2>
                                    <span>
                                        <img src="/images/why_choose_icon_2.png" alt="why choose" className="img-fluid w-100" />
                                    </span>
                                    Pesticide Free Goods
                                </h2>
                                <p>There are many variations of passages of any Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or mori words....</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp">
                            <div className="why_choose_item">
                                <h2>
                                    <span>
                                        <img src="/images/why_choose_icon_3.png" alt="why choose" className="img-fluid w-100" />
                                    </span>
                                    Curated Products
                                </h2>
                                <p>There are many variations of passages of any Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or mori words....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work_process pt_115 xs_pt_75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 m-auto">
                            <div className="section_heading mb_25 wow fadeInUp">
                                <h4>How We Works</h4>
                                <h2>Our Working Process</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
                            <div className="work_process_item">
                                <span className="number">01</span>
                                <h3>Choose The Item</h3>
                                <p>There are many variations of Lorem Ipsum available but the ma have suffered.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
                            <div className="work_process_item">
                                <span className="number number_2">02</span>
                                <h3>Add to Cart</h3>
                                <p>There are many variations of Lorem Ipsum available but the ma have suffered.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
                            <div className="work_process_item">
                                <span className="number number_3">03</span>
                                <h3>Payment Your Bill</h3>
                                <p>There are many variations of Lorem Ipsum available but the ma have suffered.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp">
                            <div className="work_process_item">
                                <span className="number number_4">04</span>
                                <h3>Received Your Item</h3>
                                <p>There are many variations of Lorem Ipsum available but the ma have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter_part mt_120 xs_mt_80 mb_120 xs_mb_80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="counter_area wow fadeInUp">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <img src="/images/counter_icon_1.png" alt="counter" className="img-fluid w-100" />
                                        </div>
                                        <h2><span className="counter">950</span>+</h2>
                                        <p>Happy customers</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/images/counter_icon_2.png" alt="counter" className="img-fluid w-100" />
                                        </div>
                                        <h2><span className="counter">350</span>+</h2>
                                        <p>Expert farmers</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/images/counter_icon_3.png" alt="counter" className="img-fluid w-100" />
                                        </div>
                                        <h2><span className="counter">35</span>+</h2>
                                        <p>Award Wining</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/images/counter_icon_4.png" alt="counter" className="img-fluid w-100" />
                                        </div>
                                        <h2><span className="counter">4.9</span></h2>
                                        <p>Avarage Rating</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial pt_115 xs_pt_75 pb_160 xs_pb_120" style={{ background: 'url(/images/testimonial_bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 m-auto wow fadeInUp">
                            <div className="section_heading mb_50">
                                <h4>Testimonials</h4>
                                <h2>What Our Customer Say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row testi_slider">
                        <div className="col-xl-4 wow fadeInUp">
                            <div className="testimonial_item">
                                <p className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>5.0</span>
                                </p>
                                <p className="review_text">Adipiscng bibendum est ultricies integr quis. it’s Tortor at risus
                                    viverra adipiscing. Nulla facili mor tempus iaculis urna id volutpat lacus. Hac habi tasse
                                    platea dictumst quisque</p>
                                <div className="testimonial_footer">
                                    <div className="img">
                                        <img src="/images/testimonial_img_1.jpg" alt="testimonial" className="img-fluid w-100" />
                                    </div>
                                    <div className="text">
                                        <h3>Bartholomew</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 wow fadeInUp">
                            <div className="testimonial_item">
                                <p className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>4.5</span>
                                </p>
                                <p className="review_text">Adipiscng bibendum est ultricies integr quis. it’s Tortor at risus
                                    viverra adipiscing. Nulla facili mor tempus iaculis urna id volutpat lacus. Hac habi tasse
                                    platea dictumst quisque</p>
                                <div className="testimonial_footer">
                                    <div className="img">
                                        <img src="/images/testimonial_img_2.jpg" alt="testimonial" className="img-fluid w-100" />
                                    </div>
                                    <div className="text">
                                        <h3>Nigel Nigel</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 wow fadeInUp">
                            <div className="testimonial_item">
                                <p className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <span>3.5</span>
                                </p>
                                <p className="review_text">Adipiscng bibendum est ultricies integr quis. it’s Tortor at risus
                                    viverra adipiscing. Nulla facili mor tempus iaculis urna id volutpat lacus. Hac habi tasse
                                    platea dictumst quisque</p>
                                <div className="testimonial_footer">
                                    <div className="img">
                                        <img src="/images/testimonial_img_3.jpg" alt="testimonial" className="img-fluid w-100" />
                                    </div>
                                    <div className="text">
                                        <h3>Robert Deni</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 wow fadeInUp">
                            <div className="testimonial_item">
                                <p className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>4.5</span>
                                </p>
                                <p className="review_text">Adipiscng bibendum est ultricies integr quis. it’s Tortor at risus
                                    viverra adipiscing. Nulla facili mor tempus iaculis urna id volutpat lacus. Hac habi tasse
                                    platea dictumst quisque</p>
                                <div className="testimonial_footer">
                                    <div className="img">
                                        <img src="/images/testimonial_img_2.jpg" alt="testimonial" className="img-fluid w-100" />
                                    </div>
                                    <div className="text">
                                        <h3>Nigel Nigel</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog pt_115 xs_pt_75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 m-auto wow fadeInUp">
                            <div className="section_heading mb_15">
                                <h4>Our Blog Post</h4>
                                <h2>Latest News & Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="blog_item">
                                <div className="blog_img">
                                    <img src="/images/blog_img_1.jpg" alt="blog" className="img-fluid w-100" />
                                </div>
                                <div className="blog_text">
                                    <ul className="top">
                                        <li><i className="far fa-tag"></i> Drink</li>
                                        <li><i className="far fa-user-circle"></i> Admin</li>
                                    </ul>
                                    <a className="title" href="blogs_details.html">Freshly Served Exploring the World of Fresh</a>
                                    <ul className="bottom">
                                        <li><a href="blogs_details.html">read more</a></li>
                                        <li><span><i className="far fa-comment-dots"></i> 15 Comments</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="blog_item">
                                <div className="blog_img">
                                    <img src="/images/blog_img_2.jpg" alt="blog" className="img-fluid w-100" />
                                </div>
                                <div className="blog_text">
                                    <ul className="top">
                                        <li><i className="far fa-tag"></i> Fish</li>
                                        <li><i className="far fa-user-circle"></i> Admin</li>
                                    </ul>
                                    <a className="title" href="blogs_details.html">The Fresh Connection Exploring the Link
                                        Between</a>
                                    <ul className="bottom">
                                        <li><a href="blogs_details.html">read more</a></li>
                                        <li><span><i className="far fa-comment-dots"></i> 42 Comments</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="blog_item">
                                <div className="blog_img">
                                    <img src="/images/blog_img_3.jpg" alt="blog" className="img-fluid w-100" />
                                </div>
                                <div className="blog_text">
                                    <ul className="top">
                                        <li><i className="far fa-tag"></i> Meat</li>
                                        <li><i className="far fa-user-circle"></i> Admin</li>
                                    </ul>
                                    <a className="title" href="blogs_details.html">Common Engine Oil Problems and Solutions</a>
                                    <ul className="bottom">
                                        <li><a href="blogs_details.html">read more</a></li>
                                        <li><span><i className="far fa-comment-dots"></i> 36 Comments</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page