import React, { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <div id='header'>
            {/* <!--=========================
                TOPBAR START
            ==========================--> */}
            <section className="topbar_3  topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-9 d-none d-md-block">
                            <ul className="topbar_info d-flex flex-wrap">
                                <li>
                                    <Link href="callto:+1(700)230-0035"><i className="fas fa-phone-alt"></i> +1 (700) 230-0035</Link>
                                </li>
                                <li>
                                    <Link href="mailto:company@gmail.com"><i className="fas fa-envelope-open-text"></i>
                                        company@gmail.com</Link>
                                </li>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i> New York, United States</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3">
                            <ul className="topbar_icon d-flex flex-wrap">
                                <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--=========================
                HEADER START
            ==========================--> */}

            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="header_logo_area">
                                <Link href="/" className="header_logo">
                                    <img src={`/images/logo.png`} alt="Freshmat" className="img-fluid w-100" />
                                </Link>
                                <div className="mobile_menu_icon d-block d-lg-none" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                    <span className="mobile_menu_icon"><i className="far fa-stream menu_icon_bar"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <form action="#">
                                <input type="text" placeholder="Search your product..." />
                                <button type="submit"><i className="far fa-search"></i></button>
                            </form>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="header_support">
                                <span className="icon"><i className="fal fa-headset"></i></span>
                                <h3>
                                    55 0562-256
                                    <span>24/7 Support Center</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MENU START */}
            <nav className="main_menu_3 main_menu d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <div className="menu_category_bar">
                                <p>
                                    <span>
                                        <img src="/images/menu_category_icon.png" alt="category icon" />
                                    </span>
                                    Browse Categories
                                </p>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <ul className="menu_cat_item show_home toggle_menu">
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_15.png" alt="category" />
                                        </span>
                                        fresh & Organic
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_10.png" alt="category" />
                                        </span>
                                        sea fish
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_4.png" alt="category" />
                                        </span>
                                        meat
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_12.png" alt="category" />
                                        </span>
                                        bakery & biscuites
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_11.png" alt="category" />
                                        </span>
                                        health & Beauty
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_14.png" alt="category" />
                                        </span>
                                        freah fruits
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_9.png" alt="category" />
                                        </span>
                                        coffee & drinks
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_2.png" alt="category" />
                                        </span>
                                        cleaning
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">
                                        <span>
                                            <img src="/images/category_list_icon_7.png" alt="category" />
                                        </span>
                                        Breakfast
                                    </Link>
                                    <ul className="menu_cat_droapdown">
                                        <li><Link href="#">caulifollowers <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">apples <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">bananas</Link></li>
                                        <li><Link href="#">broccolis <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">graps</Link></li>
                                        <li><Link href="#">tomatos</Link></li>
                                        <li><Link href="#">cherries <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">celery <i className="fas fa-angle-right"></i></Link>
                                            <ul className="sub_category">
                                                <li><Link href="#">celery</Link></li>
                                                <li><Link href="#">broccolis</Link></li>
                                                <li><Link href="#">apples</Link> </li>
                                                <li><Link href="#">bananas</Link></li>
                                                <li><Link href="#">graps</Link></li>
                                                <li><Link href="#">tomatos</Link></li>
                                                <li><Link href="#">berries</Link></li>
                                                <li><Link href="#">cherries</Link></li>
                                                <li><Link href="#">caulifollowers </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#">berries</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <ul className="menu_item">
                                <li className="relative_li">
                                    <Link className="active" href="/">home</Link>
                                </li>
                                <li>
                                    <Link href="shop">shop <i className="fas fa-chevron-down"></i></Link>
                                    <div className="mega_menu">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4">
                                                <div className="mega_menu_colum">
                                                    <h4>Fresh & Organic</h4>
                                                    <ul className="wsis__mega_menu_item">
                                                        <li><Link href="#">Bakery & Biscuites</Link></li>
                                                        <li><Link href="#">Fresh & Organic</Link></li>
                                                        <li><Link href="#">Coffee & Drinks</Link></li>
                                                        <li><Link href="#">Breakfast</Link></li>
                                                        <li><Link href="#">Jam & Jelly</Link></li>
                                                        <li><Link href="#">Fresh & Organic</Link> </li>
                                                        <li><Link href="#">berries</Link></li>
                                                        <li><Link href="#">cherries</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4">
                                                <div className="mega_menu_colum">
                                                    <h4>Bakery & Biscuites</h4>
                                                    <ul className="wsis__mega_menu_item">
                                                        <li><Link href="#">Coffee & Drinks</Link></li>
                                                        <li><Link href="#">Bakery & Biscuites</Link></li>
                                                        <li><Link href="#">Fresh & Organic</Link></li>
                                                        <li><Link href="#">berries</Link></li>
                                                        <li><Link href="#">Breakfast</Link></li>
                                                        <li><Link href="#">Fresh & Organic</Link> </li>
                                                        <li><Link href="#">Jam & Jelly</Link></li>
                                                        <li><Link href="#">cherries</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4">
                                                <div className="mega_menu_colum">
                                                    <h4>Coffee & Drinks</h4>
                                                    <ul className="wsis__mega_menu_item">
                                                        <li><Link href="#">Bakery & Biscuites</Link></li>
                                                        <li><Link href="#">Fresh & Organic</Link></li>
                                                        <li><Link href="#">Coffee & Drinks</Link></li>
                                                        <li><Link href="#">Breakfast</Link></li>
                                                        <li><Link href="#">Jam & Jelly</Link></li>
                                                        <li><Link href="#">Fresh & Organic</Link> </li>
                                                        <li><Link href="#">berries</Link></li>
                                                        <li><Link href="#">cherries</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 d-lg-none d-xl-block">
                                                <div className="mega_menu_colum menu_banner">
                                                    <Link href="#">
                                                        <img src="/images/menu_img.jpg" alt="images" className="img-fluid w-100" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="relative_li"><Link href="#">pages <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="menu_droapdown">
                                        <li><Link href="about_us">about us</Link></li>
                                        <li><Link href="shop_details">shop details</Link></li>
                                        <li><Link href="cart_view">cart view</Link></li>
                                        <li><Link href="checkout">checkout</Link></li>
                                        <li><Link href="order_tracking">order tracking</Link></li>
                                        <li><Link href="sign_in">sign in</Link></li>
                                        <li><Link href="sign_up">sign up</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="contact">contact</Link></li>
                            </ul>
                            <ul className="menu_icon">
                                <li><Link href={''} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"><i className="far fa-shopping-basket"></i> <span>2</span></Link>
                                </li>
                                <li><Link href="#"><i className="far fa-heart"></i> <span>5</span></Link></li>
                                <li><Link href="dashboard"><i className="far fa-user"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="mini_cart">
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel"> my cart <span>(05)</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                            className="far fa-times"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            <li>
                                <div className="cart_img">
                                    <img src="/images/cart_img_1.png" alt="product" className="img-fluid w-100" />
                                    <Link className="wsis__del_icon" href="#"><i className="fas fa-minus-circle"></i></Link>
                                </div>
                                <div className="cart_text">
                                    <Link className="cart_title" href="#">Lemon Meat Bone</Link>
                                    <p>$140 <del>$150</del></p>
                                </div>
                            </li>
                            <li>
                                <div className="cart_img">
                                    <img src="/images/cart_img_2.png" alt="product" className="img-fluid w-100" />
                                    <Link className="wsis__del_icon" href="#"><i className="fas fa-minus-circle"></i></Link>
                                </div>
                                <div className="cart_text">
                                    <Link className="cart_title" href="#">Three Carrot Vegetables</Link>
                                    <p>$130 <del>$160</del></p>
                                </div>
                            </li>
                            <li>
                                <div className="cart_img">
                                    <img src="/images/cart_img_3.png" alt="product" className="img-fluid w-100" />
                                    <Link className="wsis__del_icon" href="#"><i className="fas fa-minus-circle"></i></Link>
                                </div>
                                <div className="cart_text">
                                    <Link className="cart_title" href="#">Bengal Meat Beef Bone</Link>
                                    <p>$140 <del>$150</del></p>
                                </div>
                            </li>
                            <li>
                                <div className="cart_img">
                                    <img src="/images/cart_img_4.png" alt="product" className="img-fluid w-100" />
                                    <Link className="wsis__del_icon" href="#"><i className="fas fa-minus-circle"></i></Link>
                                </div>
                                <div className="cart_text">
                                    <Link className="cart_title" href="#">Three Carrot Vegetables</Link>
                                    <p>$140</p>
                                </div>
                            </li>
                            <li>
                                <div className="cart_img">
                                    <img src="/images/cart_img_5.png" alt="product" className="img-fluid w-100" />
                                    <Link className="wsis__del_icon" href="#"><i className="fas fa-minus-circle"></i></Link>
                                </div>
                                <div className="cart_text">
                                    <Link className="cart_title" href="#">Orange Slice Mix</Link>
                                    <p>$140</p>
                                </div>
                            </li>
                        </ul>
                        <h5>sub total <span>$3540</span></h5>
                        <div className="minicart_btn_area">
                            <Link className="common_btn" href="cart_view">view cart<span></span></Link>
                        </div>
                    </div>
                </div>
            </div>





            {/* mobile menu  */}

            <div className="mobile_menu_area">
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i
                        className="fal fa-times"></i></button>
                    <div className="offcanvas-body">

                        <ul className="mobile_menu_header d-flex flex-wrap">
                            <li><Link href="cart_view"><i className="far fa-shopping-basket"></i> <span>2</span></Link>
                            </li>
                            <li><Link href="dashboard_wishlist"><i className="far fa-heart"></i> <span>5</span></Link></li>
                            <li><Link href="dashboard"><i className="far fa-user"></i></Link></li>
                        </ul>

                        <form className="mobile_menu_search">
                            <input type="text" placeholder="Search" />
                            <button type="submit"><i className="far fa-search"></i></button>
                        </form>

                        <div className="mobile_menu_item_area">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Categories</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                        aria-selected="false">menu</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabIndex={0}>
                                    <ul className="main_mobile_menu">
                                        <li className="mobile_dropdown">
                                            <Link href="#">Fresh & Organic</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Fresh & Organic</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                                <li><Link href="shop">Cleaning</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Sea Fish</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">meat</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Fresh & Organic</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Bakery & Biscuites</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                                <li><Link href="shop">Cleaning</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Health & Beauty</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                                <li><Link href="shop">Cleaning</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Freah Fruits</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Fresh & Organic</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Coffee & Drinks</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Cleaning</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Fresh & Organic</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Sea Fish</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                                <li><Link href="shop">Cleaning</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Fresh & Organic</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Fresh & Organic</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Bakery & Biscuites</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                                <li><Link href="shop">Cleaning</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">Health & Beauty</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab" tabIndex={0}>
                                    <ul className="main_mobile_menu">
                                        <li className="mobile_dropdown">
                                            <Link href="/">home</Link>
                                            
                                        </li>
                                        <li><Link href="about_us">about</Link></li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">shop</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="shop">Fresh & Organic</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                                <li><Link href="shop">meat</Link></li>
                                                <li><Link href="shop">Bakery & Biscuites</Link></li>
                                                <li><Link href="shop">Health & Beauty</Link></li>
                                                <li><Link href="shop">Freah Fruits</Link></li>
                                                <li><Link href="shop">Coffee & Drinks</Link></li>
                                                <li><Link href="shop">Cleaning</Link></li>
                                                <li><Link href="shop">Sea Fish</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="blogs">blog</Link></li>
                                        <li className="mobile_dropdown">
                                            <Link href="#">pages</Link>
                                            <ul className="inner_menu">
                                                <li><Link href="about_us">about us</Link></li>
                                                <li><Link href="blogs_details">blog details</Link></li>
                                                <li><Link href="shop_details">shop details</Link></li>
                                                <li><Link href="cart_view">cart view</Link></li>
                                                <li><Link href="checkout">checkout</Link></li>
                                                <li><Link href="payment">Payment</Link></li>
                                                <li><Link href="dashboard">dashboard</Link></li>
                                                <li><Link href="order_tracking">order tracking</Link></li>
                                                <li><Link href="team">Our team</Link></li>
                                                <li><Link href="team_details">team details</Link></li>
                                                <li><Link href="error">error/404</Link></li>
                                                <li><Link href="faq">faq's</Link></li>
                                                <li><Link href="gallery">gallery</Link></li>
                                                <li><Link href="sign_in">sign in</Link></li>
                                                <li><Link href="sign_up">sign up</Link></li>
                                                <li><Link href="forgot_password">forgot password</Link></li>
                                                <li><Link href="privacy_policy">privacy policy</Link></li>
                                                <li><Link href="terms_condition">terms & condition</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="contact">contact</Link></li>
                                        <li><Link href="flash_sell">flash sell</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header